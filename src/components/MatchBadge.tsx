import { Heart } from "lucide-react";
import { Button } from "../components/ui/button";

interface MatchBadgeProps {
  matchCount: number;
  onClick: () => void;
}

export const MatchBadge = ({ matchCount, onClick }: MatchBadgeProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Button
        onClick={onClick}
        className="relative bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2 transition-all duration-200 hover:scale-105"
      >
        <Heart className="w-5 h-5 fill-white" />
        <span className="font-semibold">Matches</span>
        
        {matchCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
            {matchCount}
          </span>
        )}
      </Button>
    </div>
  );
};