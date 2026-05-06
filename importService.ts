import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { Debt, Expense, Income } from './types';

/**
 * Interface para mapear colunas do arquivo para campos do FinanFlow
 */
export interface ColumnMapping {
  [key: string]: string; // { 'finanflowField': 'excelColumnName' }
}

/**
 * Interface para o resultado da importação
 */
export interface ImportResult {
  success: boolean;
  debts: Debt[];
  expenses: Expense[];
  incomes: Income[];
  errors: string[];
  warnings: string[];
}

/**
 * Lê um arquivo Excel e retorna os dados em formato JSON
 */
export async function readExcelFile(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        resolve(jsonData);
      } catch (error) {
        reject(new Error(`Erro ao ler arquivo Excel: ${error}`));
      }
    };
    reader.onerror = () => reject(new Error('Erro ao ler o arquivo'));
    reader.readAsArrayBuffer(file);
  });
}

/**
 * Lê um arquivo CSV e retorna os dados em formato JSON
 */
export async function readCSVFile(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data as any[]);
      },
      error: (error) => {
        reject(new Error(`Erro ao ler arquivo CSV: ${error.message}`));
      },
    });
  });
}

/**
 * Valida e converte dados de dívida
 */
export function validateAndConvertDebt(row: any, mapping: ColumnMapping): Debt | null {
  try {
    const description = row[mapping.description]?.toString().trim();
    const initialAmount = parseFloat(row[mapping.initialAmount]);
    const currentAmount = parseFloat(row[mapping.currentAmount] || row[mapping.initialAmount]);
    const dueDate = row[mapping.dueDate] ? new Date(row[mapping.dueDate]) : new Date();
    const creditor = row[mapping.creditor]?.toString().trim() || 'Credor';
    const status = row[mapping.status]?.toString().toLowerCase() || 'active';

    if (!description || isNaN(initialAmount)) {
      return null;
    }

    const debt: Debt = {
      id: `debt_${Date.now()}_${Math.random()}`,
      description,
      initialAmount,
      currentAmount: isNaN(currentAmount) ? initialAmount : currentAmount,
      dueDate: dueDate.toISOString(),
      creditor,
      status: status as 'active' | 'paid' | 'negotiated',
      createdAt: new Date().toISOString(),
      type: 'current', // Padrão para importação
      agreement: null,
      payments: [],
    };

    return debt;
  } catch (error) {
    console.error('Erro ao validar dívida:', error);
    return null;
  }
}

/**
 * Valida e converte dados de despesa
 */
export function validateAndConvertExpense(row: any, mapping: ColumnMapping): Expense | null {
  try {
    const description = row[mapping.description]?.toString().trim();
    const amount = parseFloat(row[mapping.amount]);
    const date = row[mapping.date] ? new Date(row[mapping.date]) : new Date();
    const category = row[mapping.category]?.toString().trim() || 'Outros';
    const isFixed = row[mapping.isFixed]?.toString().toLowerCase() === 'true' || row[mapping.isFixed] === 1;

    if (!description || isNaN(amount)) {
      return null;
    }

    const expense: Expense = {
      id: `expense_${Date.now()}_${Math.random()}`,
      description,
      amount,
      date: date.toISOString(),
      category,
      isFixed,
      createdAt: new Date().toISOString(),
    };

    return expense;
  } catch (error) {
    console.error('Erro ao validar despesa:', error);
    return null;
  }
}

/**
 * Valida e converte dados de receita
 */
export function validateAndConvertIncome(row: any, mapping: ColumnMapping): Income | null {
  try {
    const description = row[mapping.description]?.toString().trim();
    const amount = parseFloat(row[mapping.amount]);
    const date = row[mapping.date] ? new Date(row[mapping.date]) : new Date();
    const source = row[mapping.source]?.toString().trim() || 'Receita';

    if (!description || isNaN(amount)) {
      return null;
    }

    const income: Income = {
      id: `income_${Date.now()}_${Math.random()}`,
      description,
      amount,
      date: date.toISOString(),
      source,
      createdAt: new Date().toISOString(),
    };

    return income;
  } catch (error) {
    console.error('Erro ao validar receita:', error);
    return null;
  }
}

/**
 * Importa dívidas de um arquivo Excel/CSV
 */
export async function importDebts(
  file: File,
  mapping: ColumnMapping
): Promise<ImportResult> {
  const result: ImportResult = {
    success: false,
    debts: [],
    expenses: [],
    incomes: [],
    errors: [],
    warnings: [],
  };

  try {
    // Ler arquivo
    let data: any[] = [];
    if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      data = await readExcelFile(file);
    } else if (file.name.endsWith('.csv')) {
      data = await readCSVFile(file);
    } else {
      result.errors.push('Formato de arquivo não suportado. Use .xlsx ou .csv');
      return result;
    }

    if (data.length === 0) {
      result.errors.push('O arquivo está vazio');
      return result;
    }

    // Processar linhas
    data.forEach((row, index) => {
      const debt = validateAndConvertDebt(row, mapping);
      if (debt) {
        result.debts.push(debt);
      } else if (Object.values(row).some(v => v)) {
        result.warnings.push(`Linha ${index + 2}: Dados inválidos ou incompletos`);
      }
    });

    result.success = result.debts.length > 0;

    if (result.debts.length === 0 && result.warnings.length === 0) {
      result.errors.push('Nenhuma dívida válida foi encontrada no arquivo');
    }

    return result;
  } catch (error) {
    result.errors.push(`Erro ao importar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    return result;
  }
}

/**
 * Importa despesas de um arquivo Excel/CSV
 */
export async function importExpenses(
  file: File,
  mapping: ColumnMapping
): Promise<ImportResult> {
  const result: ImportResult = {
    success: false,
    debts: [],
    expenses: [],
    incomes: [],
    errors: [],
    warnings: [],
  };

  try {
    // Ler arquivo
    let data: any[] = [];
    if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      data = await readExcelFile(file);
    } else if (file.name.endsWith('.csv')) {
      data = await readCSVFile(file);
    } else {
      result.errors.push('Formato de arquivo não suportado. Use .xlsx ou .csv');
      return result;
    }

    if (data.length === 0) {
      result.errors.push('O arquivo está vazio');
      return result;
    }

    // Processar linhas
    data.forEach((row, index) => {
      const expense = validateAndConvertExpense(row, mapping);
      if (expense) {
        result.expenses.push(expense);
      } else if (Object.values(row).some(v => v)) {
        result.warnings.push(`Linha ${index + 2}: Dados inválidos ou incompletos`);
      }
    });

    result.success = result.expenses.length > 0;

    if (result.expenses.length === 0 && result.warnings.length === 0) {
      result.errors.push('Nenhuma despesa válida foi encontrada no arquivo');
    }

    return result;
  } catch (error) {
    result.errors.push(`Erro ao importar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    return result;
  }
}

/**
 * Importa receitas de um arquivo Excel/CSV
 */
export async function importIncomes(
  file: File,
  mapping: ColumnMapping
): Promise<ImportResult> {
  const result: ImportResult = {
    success: false,
    debts: [],
    expenses: [],
    incomes: [],
    errors: [],
    warnings: [],
  };

  try {
    // Ler arquivo
    let data: any[] = [];
    if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      data = await readExcelFile(file);
    } else if (file.name.endsWith('.csv')) {
      data = await readCSVFile(file);
    } else {
      result.errors.push('Formato de arquivo não suportado. Use .xlsx ou .csv');
      return result;
    }

    if (data.length === 0) {
      result.errors.push('O arquivo está vazio');
      return result;
    }

    // Processar linhas
    data.forEach((row, index) => {
      const income = validateAndConvertIncome(row, mapping);
      if (income) {
        result.incomes.push(income);
      } else if (Object.values(row).some(v => v)) {
        result.warnings.push(`Linha ${index + 2}: Dados inválidos ou incompletos`);
      }
    });

    result.success = result.incomes.length > 0;

    if (result.incomes.length === 0 && result.warnings.length === 0) {
      result.errors.push('Nenhuma receita válida foi encontrada no arquivo');
    }

    return result;
  } catch (error) {
    result.errors.push(`Erro ao importar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    return result;
  }
}

/**
 * Detecta automaticamente as colunas do arquivo
 */
export function detectColumns(data: any[]): ColumnMapping {
  if (data.length === 0) return {};

  const firstRow = data[0];
  const headers = Object.keys(firstRow);
  const mapping: ColumnMapping = {};

  // Mapeamento automático baseado em palavras-chave
  const keywordMap = {
    description: ['descri', 'nome', 'titulo', 'title', 'name', 'description'],
    amount: ['valor', 'amount', 'montante', 'total'],
    date: ['data', 'date', 'vencimento', 'due'],
    category: ['categoria', 'category', 'tipo', 'type'],
    source: ['origem', 'source', 'procedencia'],
    creditor: ['credor', 'creditor', 'devedor'],
    status: ['status', 'situacao', 'state'],
    initialAmount: ['valor_inicial', 'initial', 'original'],
    currentAmount: ['valor_atual', 'current', 'saldo'],
    isFixed: ['fixo', 'fixed', 'recorrente', 'recurring'],
  };

  for (const [field, keywords] of Object.entries(keywordMap)) {
    const matchedHeader = headers.find(h =>
      keywords.some(kw => h.toLowerCase().includes(kw))
    );
    if (matchedHeader) {
      mapping[field] = matchedHeader;
    }
  }

  return mapping;
}
