import React, { useState } from 'react';
import { Upload, AlertCircle, CheckCircle, X } from 'lucide-react';
import {
  readExcelFile,
  readCSVFile,
  detectColumns,
  importDebts,
  importExpenses,
  importIncomes,
  ColumnMapping,
  ImportResult,
} from './importService';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (result: ImportResult) => void;
  importType: 'debts' | 'expenses' | 'incomes';
}

export default function ImportModal({
  isOpen,
  onClose,
  onImport,
  importType,
}: ImportModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [columnMapping, setColumnMapping] = useState<ColumnMapping>({});
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'upload' | 'mapping' | 'preview'>('upload');
  const [result, setResult] = useState<ImportResult | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setLoading(true);

    try {
      let data: any[] = [];
      if (selectedFile.name.endsWith('.xlsx') || selectedFile.name.endsWith('.xls')) {
        data = await readExcelFile(selectedFile);
      } else if (selectedFile.name.endsWith('.csv')) {
        data = await readCSVFile(selectedFile);
      } else {
        alert('Formato não suportado. Use .xlsx ou .csv');
        return;
      }

      setPreviewData(data.slice(0, 5)); // Primeiras 5 linhas para preview
      const detectedMapping = detectColumns(data);
      setColumnMapping(detectedMapping);
      setStep('mapping');
    } catch (error) {
      alert(`Erro ao ler arquivo: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleMappingChange = (field: string, value: string) => {
    setColumnMapping({
      ...columnMapping,
      [field]: value,
    });
  };

  const handleImport = async () => {
    if (!file) return;

    setLoading(true);
    try {
      let importResult: ImportResult;

      if (importType === 'debts') {
        importResult = await importDebts(file, columnMapping);
      } else if (importType === 'expenses') {
        importResult = await importExpenses(file, columnMapping);
      } else {
        importResult = await importIncomes(file, columnMapping);
      }

      setResult(importResult);
      setStep('preview');

      if (importResult.success) {
        setTimeout(() => {
          onImport(importResult);
          onClose();
        }, 2000);
      }
    } catch (error) {
      alert(`Erro ao importar: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const getFieldLabel = () => {
    const labels = {
      debts: {
        description: 'Descrição da Dívida',
        initialAmount: 'Valor Inicial',
        currentAmount: 'Valor Atual',
        dueDate: 'Data de Vencimento',
        creditor: 'Credor',
        status: 'Status',
      },
      expenses: {
        description: 'Descrição',
        amount: 'Valor',
        date: 'Data',
        category: 'Categoria',
        isFixed: 'É Fixa?',
      },
      incomes: {
        description: 'Descrição',
        amount: 'Valor',
        date: 'Data',
        source: 'Origem',
      },
    };
    return labels[importType];
  };

  const fieldLabels = getFieldLabel();
  const availableColumns = previewData.length > 0 ? Object.keys(previewData[0]) : [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-slate-900">
            Importar {importType === 'debts' ? 'Dívidas' : importType === 'expenses' ? 'Despesas' : 'Receitas'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'upload' && (
            <div className="space-y-4">
              <p className="text-slate-600">
                Selecione um arquivo Excel (.xlsx) ou CSV para importar seus dados.
              </p>
              <label className="flex items-center justify-center w-full p-8 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <div className="flex flex-col items-center">
                  <Upload className="text-blue-600 mb-2" size={32} />
                  <span className="text-blue-600 font-semibold">Clique para selecionar arquivo</span>
                  <span className="text-sm text-slate-500 mt-1">ou arraste e solte</span>
                </div>
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={loading}
                />
              </label>
              {file && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Arquivo selecionado:</strong> {file.name}
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 'mapping' && (
            <div className="space-y-4">
              <p className="text-slate-600 mb-4">
                Mapeie as colunas do seu arquivo para os campos do FinanFlow:
              </p>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {Object.entries(fieldLabels).map(([field, label]) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {label}
                    </label>
                    <select
                      value={columnMapping[field] || ''}
                      onChange={(e) => handleMappingChange(field, e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Selecione uma coluna --</option>
                      {availableColumns.map((col) => (
                        <option key={col} value={col}>
                          {col}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              {/* Preview */}
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Preview dos Dados:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        {availableColumns.slice(0, 3).map((col) => (
                          <th key={col} className="text-left py-2 px-3 font-semibold text-slate-700">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {previewData.slice(0, 2).map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-slate-100">
                          {availableColumns.slice(0, 3).map((col) => (
                            <td key={col} className="py-2 px-3 text-slate-600">
                              {String(row[col] || '-').substring(0, 30)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {step === 'preview' && result && (
            <div className="space-y-4">
              {result.success ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-green-900">Importação Bem-sucedida!</h4>
                    <p className="text-sm text-green-800 mt-1">
                      {result.debts.length > 0 && `${result.debts.length} dívida(s) importada(s)`}
                      {result.expenses.length > 0 && `${result.expenses.length} despesa(s) importada(s)`}
                      {result.incomes.length > 0 && `${result.incomes.length} receita(s) importada(s)`}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-red-900">Erro na Importação</h4>
                    <ul className="text-sm text-red-800 mt-2 space-y-1">
                      {result.errors.map((error, idx) => (
                        <li key={idx}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {result.warnings.length > 0 && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Avisos:</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    {result.warnings.map((warning, idx) => (
                      <li key={idx}>• {warning}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-slate-50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors"
          >
            Cancelar
          </button>
          {step === 'mapping' && (
            <button
              onClick={handleImport}
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Importando...' : 'Importar'}
            </button>
          )}
          {step === 'upload' && file && (
            <button
              onClick={() => setStep('mapping')}
              className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
