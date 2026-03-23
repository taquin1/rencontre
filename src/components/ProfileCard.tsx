import { Profile } from "../utils/mockProfiles";
import { X, Heart, MapPin } from "lucide-react";
import { Card } from "../components/ui/card";

interface ProfileCardProps {
  profile: Profile;
  onLike: () => void;
  onSkip: () => void;
  offsetX: number;
  rotation: number;
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
  onMouseMove: (e: React.MouseEvent | React.TouchEvent) => void;
  onMouseUp: () => void;
}

export const ProfileCard = ({
  profile,
  onLike,
  onSkip,
  offsetX,
  rotation,
  isDragging,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}: ProfileCardProps) => {
  const opacity = Math.min(Math.abs(offsetX) / 100, 1);
  const likeOpacity = offsetX > 0 ? opacity : 0;
  const skipOpacity = offsetX < 0 ? opacity : 0;

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Like indicator */}
      <div
        className="absolute top-8 right-8 z-10 text-green-500 font-bold text-4xl border-4 border-green-500 px-4 py-2 rounded-lg"
        style={{ opacity: likeOpacity, transform: `rotate(${rotation}deg)` }}
      >
        LIKE
      </div>

      {/* Skip indicator */}
      <div
        className="absolute top-8 left-8 z-10 text-red-500 font-bold text-4xl border-4 border-red-500 px-4 py-2 rounded-lg"
        style={{ opacity: skipOpacity, transform: `rotate(${rotation}deg)` }}
      >
        NOPE
      </div>

      <Card
        className="w-full h-[70vh] overflow-hidden cursor-grab active:cursor-grabbing shadow-xl"
        style={{
          transform: `translateX(${offsetX}px) rotate(${rotation}deg)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onMouseDown}
        onTouchMove={onMouseMove}
        onTouchEnd={onMouseUp}
      >
        <div className="relative h-full">
          {/* Photo */}
          <div className="h-3/5 w-full bg-gray-200">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-6 bg-white h-2/5">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">
                {profile.name}, {profile.age}
              </h2>
            </div>
            
            <div className="flex items-center gap-1 text-gray-600 mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{profile.location}</span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
              {profile.bio}
            </p>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={onSkip}
          className="w-16 h-16 rounded-full bg-white border-2 border-red-400 text-red-500 flex items-center justify-center shadow-lg hover:bg-red-50 hover:scale-110 transition-all duration-200"
        >
          <X className="w-8 h-8" />
        </button>
        
        <button
          onClick={onLike}
          className="w-16 h-16 rounded-full bg-white border-2 border-pink-400 text-pink-500 flex items-center justify-center shadow-lg hover:bg-pink-50 hover:scale-110 transition-all duration-200"
        >
          <Heart className="w-8 h-8 fill-pink-500" />
        </button>
      </div>
    </div>
  );
};