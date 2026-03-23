import { X } from "lucide-react";
import { Profile } from "../utils/mockProfiles";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface MatchModalProps {
  isOpen: boolean;
  matches: Profile[];
  onClose: () => void;
}

export const MatchModal = ({ isOpen, matches, onClose }: MatchModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <Card className="relative w-full max-w-md max-h-[80vh] overflow-hidden bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Vos Matches</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Matches List */}
        <CardContent className="p-4 overflow-y-auto max-h-[60vh]">
          {matches.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Aucun match pour le moment
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Continuez à swiper pour trouver votre match parfait !
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={match.photo}
                    alt={match.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {match.name}, {match.age}
                    </h3>
                    <p className="text-sm text-gray-500">{match.location}</p>
                  </div>
                  <div className="text-pink-500">
                    <Heart className="w-5 h-5 fill-pink-500" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};