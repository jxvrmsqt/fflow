import { collection, addDoc, writeBatch, doc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Assumindo que você já tem firebaseConfig.ts
import { Debt, Expense, Income } from './types';
import { ImportResult } from './importService';

/**
 * Salva dívidas importadas no Firestore
 */
export async function saveImportedDebts(
  userId: string,
  debts: Debt[]
): Promise<{ success: boolean; count: number; error?: string }> {
  try {
    const batch = writeBatch(db);
    const debtsRef = collection(db, 'users', userId, 'debts');

    debts.forEach((debt) => {
      const docRef = doc(debtsRef);
      batch.set(docRef, {
        ...debt,
        importedAt: new Date().toISOString(),
      });
    });

    await batch.commit();

    return {
      success: true,
      count: debts.length,
    };
  } catch (error) {
    return {
      success: false,
      count: 0,
      error: `Erro ao salvar dívidas: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    };
  }
}

/**
 * Salva despesas importadas no Firestore
 */
export async function saveImportedExpenses(
  userId: string,
  expenses: Expense[]
): Promise<{ success: boolean; count: number; error?: string }> {
  try {
    const batch = writeBatch(db);
    const expensesRef = collection(db, 'users', userId, 'expenses');

    expenses.forEach((expense) => {
      const docRef = doc(expensesRef);
      batch.set(docRef, {
        ...expense,
        importedAt: new Date().toISOString(),
      });
    });

    await batch.commit();

    return {
      success: true,
      count: expenses.length,
    };
  } catch (error) {
    return {
      success: false,
      count: 0,
      error: `Erro ao salvar despesas: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    };
  }
}

/**
 * Salva receitas importadas no Firestore
 */
export async function saveImportedIncomes(
  userId: string,
  incomes: Income[]
): Promise<{ success: boolean; count: number; error?: string }> {
  try {
    const batch = writeBatch(db);
    const incomesRef = collection(db, 'users', userId, 'incomes');

    incomes.forEach((income) => {
      const docRef = doc(incomesRef);
      batch.set(docRef, {
        ...income,
        importedAt: new Date().toISOString(),
      });
    });

    await batch.commit();

    return {
      success: true,
      count: incomes.length,
    };
  } catch (error) {
    return {
      success: false,
      count: 0,
      error: `Erro ao salvar receitas: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    };
  }
}

/**
 * Salva o resultado completo da importação e sincroniza com Google Drive
 */
export async function saveImportResultAndSync(
  userId: string,
  result: ImportResult,
  driveService: any // Referência ao serviço de Drive
): Promise<{ success: boolean; message: string }> {
  try {
    // Salvar no Firestore
    const debtsResult = result.debts.length > 0 ? await saveImportedDebts(userId, result.debts) : null;
    const expensesResult = result.expenses.length > 0 ? await saveImportedExpenses(userId, result.expenses) : null;
    const incomesResult = result.incomes.length > 0 ? await saveImportedIncomes(userId, result.incomes) : null;

    // Verificar se houve erros
    const hasErrors = [debtsResult, expensesResult, incomesResult].some(r => r && !r.success);
    if (hasErrors) {
      throw new Error('Erro ao salvar alguns dados no Firestore');
    }

    // Sincronizar com Google Drive
    if (driveService && typeof driveService.syncToGoogleDrive === 'function') {
      await driveService.syncToGoogleDrive(userId);
    }

    const totalSaved =
      (debtsResult?.count || 0) +
      (expensesResult?.count || 0) +
      (incomesResult?.count || 0);

    return {
      success: true,
      message: `${totalSaved} item(ns) importado(s) e sincronizado(s) com sucesso!`,
    };
  } catch (error) {
    return {
      success: false,
      message: `Erro ao salvar importação: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    };
  }
}

/**
 * Registra a importação no histórico do usuário
 */
export async function logImportHistory(
  userId: string,
  importType: 'debts' | 'expenses' | 'incomes',
  fileName: string,
  result: ImportResult
): Promise<void> {
  try {
    const historyRef = collection(db, 'users', userId, 'importHistory');
    await addDoc(historyRef, {
      type: importType,
      fileName,
      itemsCount: result.debts.length + result.expenses.length + result.incomes.length,
      errors: result.errors,
      warnings: result.warnings,
      timestamp: new Date().toISOString(),
      success: result.success,
    });
  } catch (error) {
    console.error('Erro ao registrar histórico de importação:', error);
  }
}
