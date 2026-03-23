import { useProfile } from './hooks/useProfile';
import { findMatches } from './utils/matchEngine';
import { ProfileForm } from './components/ProfileForm';
import { MatchCard } from './components/MatchCard';
import { EmptyState } from './components/EmptyState';

function App() {
  const { profile, updateProfile, resetProfile, isComplete, isLoaded } = useProfile();
  const matches = findMatches(profile);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-zinc-600">טוען...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-zinc-100 mb-2">הכרויות לדתיים</h1>
          <p className="text-zinc-600 text-sm">מציאת שותפים על פי ערכים דתיים משותפים</p>
        </header>

        <div className="space-y-8">
          <ProfileForm 
            profile={profile} 
            updateProfile={updateProfile} 
            resetProfile={resetProfile} 
          />

          {isComplete ? (
            <div>
              <h2 className="text-lg font-medium text-zinc-100 mb-4">
                התאמות ({matches.length})
              </h2>
              {matches.length > 0 ? (
                <div className="space-y-4">
                  {matches.map(match => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-zinc-600">
                  אין התאמות עבור הפרופיל שלך
                </div>
              )}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;