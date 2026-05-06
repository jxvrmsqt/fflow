# Guia de Importação de Dívidas e Despesas - FinanFlow

## Formatos Suportados

O FinanFlow suporta importação através de:
- **Excel** (.xlsx, .xls)
- **CSV** (.csv)
- **Google Sheets** (via integração)

## Estrutura de Arquivo para Dívidas

Seu arquivo Excel/CSV deve conter as seguintes colunas:

| Coluna | Descrição | Tipo | Exemplo |
|--------|-----------|------|---------|
| Descrição | Nome/descrição da dívida | Texto | "Empréstimo Pessoal" |
| Valor Inicial | Valor original da dívida | Número | 5000.00 |
| Valor Atual | Saldo atual da dívida | Número | 3500.00 |
| Data de Vencimento | Data de vencimento | Data | 2024-12-31 |
| Credor | Nome do credor | Texto | "Banco XYZ" |
| Status | Status da dívida | Texto | "active", "paid", "negotiated" |

### Exemplo de Arquivo Excel para Dívidas:

```
Descrição                | Valor Inicial | Valor Atual | Data de Vencimento | Credor        | Status
Empréstimo Pessoal       | 5000.00       | 3500.00     | 2024-12-31        | Banco XYZ     | active
Cartão de Crédito        | 2500.00       | 1200.00     | 2024-06-30        | Banco ABC     | active
Financiamento Carro      | 25000.00      | 18000.00    | 2025-06-30        | Financeira    | active
```

## Estrutura de Arquivo para Despesas

| Coluna | Descrição | Tipo | Exemplo |
|--------|-----------|------|---------|
| Descrição | Nome da despesa | Texto | "Aluguel" |
| Valor | Valor da despesa | Número | 1500.00 |
| Data | Data da despesa | Data | 2024-04-30 |
| Categoria | Categoria da despesa | Texto | "Moradia" |
| É Fixa? | Se é uma despesa fixa | Booleano | true, false |

### Exemplo de Arquivo Excel para Despesas:

```
Descrição    | Valor   | Data       | Categoria  | É Fixa?
Aluguel      | 1500.00 | 2024-04-30 | Moradia    | true
Supermercado | 350.00  | 2024-04-28 | Alimentação| false
Internet     | 99.90   | 2024-04-01 | Utilidades | true
```

## Estrutura de Arquivo para Receitas

| Coluna | Descrição | Tipo | Exemplo |
|--------|-----------|------|---------|
| Descrição | Nome da receita | Texto | "Salário" |
| Valor | Valor da receita | Número | 3500.00 |
| Data | Data da receita | Data | 2024-04-30 |
| Origem | Origem da receita | Texto | "Emprego" |

### Exemplo de Arquivo Excel para Receitas:

```
Descrição        | Valor    | Data       | Origem
Salário          | 3500.00  | 2024-04-30 | Emprego
Freelance        | 800.00   | 2024-04-25 | Trabalho Extra
Aluguel Imóvel   | 500.00   | 2024-04-01 | Investimento
```

## Como Importar

1. **Abra o FinanFlow** e vá para a seção de **Ajustes** ou **Importar Dados**
2. **Clique em "Importar Dívidas/Despesas/Receitas"**
3. **Selecione seu arquivo** (Excel ou CSV)
4. **Mapeie as colunas**: O FinanFlow tentará detectar automaticamente, mas você pode ajustar manualmente
5. **Revise o preview** dos dados
6. **Clique em "Importar"** para finalizar

## Dicas Importantes

- ✅ **Use datas no formato ISO** (YYYY-MM-DD) para melhor compatibilidade
- ✅ **Valores monetários** devem usar ponto (.) como separador decimal
- ✅ **Booleanos** podem ser: true/false, sim/não, 1/0
- ✅ **Nomes de colunas** podem variar (ex: "Descrição", "Nome", "Título")
- ❌ **Não deixe células vazias** em campos obrigatórios
- ❌ **Não use caracteres especiais** nos nomes de colunas

## Validação de Dados

O FinanFlow valida automaticamente:
- ✓ Valores monetários válidos
- ✓ Datas no formato correto
- ✓ Campos obrigatórios preenchidos
- ✓ Duplicatas (aviso, não rejeita)

## Sincronização Automática

Após a importação bem-sucedida:
1. Os dados são salvos no Firebase Firestore
2. Um backup automático é criado no Google Drive
3. Os dados são sincronizados em tempo real entre dispositivos
4. O histórico de importação é registrado

## Troubleshooting

### "Arquivo vazio"
- Verifique se o arquivo tem dados nas colunas
- Certifique-se de que a primeira linha contém os nomes das colunas

### "Nenhuma dívida válida encontrada"
- Verifique se as colunas estão mapeadas corretamente
- Certifique-se de que os valores monetários estão no formato correto (ex: 1000.00)

### "Erro ao ler arquivo"
- Tente salvar o arquivo como .xlsx (em vez de .xls)
- Verifique se o arquivo não está corrompido

## Contato e Suporte

Se tiver dúvidas sobre o formato de importação, consulte a documentação completa em:
https://nutrix.app.br/docs
