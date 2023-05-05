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

interface CreateTransaction {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  loadTransactions: (q: string) => Promise<void>;
  createTransaction: (data: CreateTransaction) => Promise<void>;
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
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransaction) {
    const { description, price, category, type } = data;

    const response = await api.post("/transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions(state => [response.data, ...state]);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, loadTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
