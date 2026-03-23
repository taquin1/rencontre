import { User } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
        <User className="w-10 h-10 text-zinc-600" />
      </div>
      <h2 className="text-2xl font-semibold text-zinc-100 mb-3">השלם את הפרופיל שלך</h2>
      <p className="text-zinc-500 max-w-md leading-relaxed">
        כדי לראות התאמות, עליך להגדיר את הערכים הדתיים שלך
      </p>
    </div>
  );
}