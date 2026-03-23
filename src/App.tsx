import { useState } from "react";
import { Profile, mockProfiles } from "./utils/mockProfiles";
import { ProfileCard } from "./components/ProfileCard";
import { MatchBadge } from "./components/MatchBadge";
import { MatchModal } from "./components/MatchModal";
import { useSwipe } from "./hooks/useSwipe";
import { Heart } from "lucide-react";

function App() {
  const [profiles, setProfiles] = useState<Profile[]>(mockProfiles);
  const [matches, setMatches] = useState<Profile[]>([]);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [showNewMatchAnimation, setShowNewMatchAnimation] = useState(false);

  const currentProfile = profiles[0];

  const handleLike = () => {
    if (!currentProfile) return;

    const likedProfile = currentProfile;
    
    // Remove current profile from stack
    setProfiles((prev) => prev.slice(1));

    // Check if it's a match (profile likes user back)
    if (likedProfile.likesUser) {
      setMatches((prev) => [...prev, likedProfile]);
      setShowNewMatchAnimation(true);
      setTimeout(() => setShowNewMatchAnimation(false), 2000);
    }
  };

  const handleSkip = () => {
    if (!currentProfile) return;
    setProfiles((prev) => prev.slice(1));
  };

  const { offsetX, rotation, isDragging, handleMouseDown, handleMouseMove, handleMouseUp, reset } = useSwipe(
    handleSkip,
    handleLike
  );

  // Reset swipe state when profile changes
  if (offsetX !== 0 && !isDragging && profiles.length > 0) {
    reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              SwipeMatch
            </h1>
          </div>
          <div className="text-sm text-gray-500">
            {profiles.length} profils restants
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-24 px-4 min-h-screen flex flex-col items-center justify-center">
        {currentProfile ? (
          <ProfileCard
            profile={currentProfile}
            onLike={handleLike}
            onSkip={handleSkip}
            offsetX={offsetX}
            rotation={rotation}
            isDragging={isDragging}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        ) : (
          <div className="text-center py-12">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Plus de profils !
            </h2>
            <p className="text-gray-500 mb-6">
              Vous avez parcouru tous les profils disponibles
            </p>
            <button
              onClick={() => setProfiles(mockProfiles)}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:scale-105"
            >
              Recommencer
            </button>
          </div>
        )}
      </main>

      {/* New Match Animation */}
      {showNewMatchAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pink-500/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="text-center animate-in zoom-in duration-300">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping" />
              <Heart className="w-24 h-24 text-white fill-white relative z-10" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">C'est un Match !</h2>
            <p className="text-white/80 text-lg">
              {matches[matches.length - 1]?.name} vous a aussi liké(e) !
            </p>
          </div>
        </div>
      )}

      {/* Match Badge */}
      <MatchBadge
        matchCount={matches.length}
        onClick={() => setIsMatchModalOpen(true)}
      />

      {/* Match Modal */}
      <MatchModal
        isOpen={isMatchModalOpen}
        matches={matches}
        onClose={() => setIsMatchModalOpen(false)}
      />
    </div>
  );
}

export default App;