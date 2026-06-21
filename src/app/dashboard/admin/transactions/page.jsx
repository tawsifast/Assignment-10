
import { getAllTransactions } from "@/lib/api/transaction";
import TransactionsTable from "./TransactionsTable";


export default async function AdminTransactionsPage() {
  const transactions = await getAllTransactions();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-slate-200 mb-4">Transaction History</h2>
      <TransactionsTable transactions={transactions} />
    </div>
  );
}