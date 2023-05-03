import { ReactNode, createContext, useState, useEffect } from "react";

import { api } from "../services/api";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  loadTransactions: (q: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query,
      },
    });
    setTransactions(response.data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, loadTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
