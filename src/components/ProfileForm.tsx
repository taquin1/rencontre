import { UserProfile, Religion, ReligiousLevel, Custom, Goal } from '../types';
import { Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';

interface ProfileFormProps {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  resetProfile: () => void;
}

const RELIGION_OPTIONS: { value: Religion; label: string }[] = [
  { value: 'judaism', label: 'יהדות' },
  { value: 'islam', label: 'אסלאם' },
  { value: 'orthodox-christianity', label: 'נצרות אורתודוקסית' },
  { value: 'druze', label: 'דרוזים' },
  { value: 'sikh', label: 'סיקים' },
];

const LEVEL_OPTIONS: { value: ReligiousLevel; label: string }[] = [
  { value: 'secular', label: 'חילוני' },
  { value: 'traditional', label: 'מסורתי' },
  { value: 'national-religious', label: 'דתי לאומי' },
  { value: 'haredi-liberal', label: 'חרדי-ליברלי' },
  { value: 'haredi-moderate', label: 'חרדי-מתון / חסידי' },
];

const CUSTOM_OPTIONS: { value: Custom; label: string }[] = [
  { value: 'shabbat', label: 'שומר שבת' },
  { value: 'kosher', label: 'כשרות ביתית' },
  { value: 'separation', label: 'הפרדה נשים-גברים' },
  { value: 'pilgrimage', label: 'עלייה לרגל' },
  { value: 'daily-study', label: 'לימוד יומי' },
  { value: 'religious-dress', label: 'לבוש דתי מוגדר' },
];

const GOAL_OPTIONS: { value: Goal; label: string }[] = [
  { value: 'marriage', label: 'נישואין' },
  { value: 'serious-relationship', label: 'קשר רציני' },
  { value: 'study-sharing', label: 'חיפוש ללימוד/שיתוף' },
];

export function ProfileForm({ profile, updateProfile, resetProfile }: ProfileFormProps) {
  const toggleCustom = (custom: Custom) => {
    const current = profile.customs || [];
    const updated = current.includes(custom)
      ? current.filter(c => c !== custom)
      : [...current, custom];
    updateProfile({ customs: updated });
  };

  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-zinc-100">הגדרות פרופיל</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetProfile}
          className="text-zinc-600 hover:text-red-500 hover:bg-zinc-900"
        >
          <Trash2 className="w-4 h-4 ml-2" />
          אפס פרופיל
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-3">דת</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {RELIGION_OPTIONS.map(option => (
              <button
                key={option.value}
                onClick={() => updateProfile({ religion: option.value })}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  profile.religion === option.value
                    ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                    : 'bg-zinc-900 text-zinc-500 border border-zinc-900 hover:border-zinc-800'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-3">דרגת דתיות</label>
          <div className="space-y-2">
            {LEVEL_OPTIONS.map(option => (
              <button
                key={option.value}
                onClick={() => updateProfile({ religiousLevel: option.value })}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium text-right transition-all ${
                  profile.religiousLevel === option.value
                    ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                    : 'bg-zinc-900 text-zinc-500 border border-zinc-900 hover:border-zinc-800'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-3">מסורת ומנהגים</label>
          <div className="grid grid-cols-2 gap-2">
            {CUSTOM_OPTIONS.map(option => (
              <button
                key={option.value}
                onClick={() => toggleCustom(option.value)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  (profile.customs || []).includes(option.value)
                    ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                    : 'bg-zinc-900 text-zinc-500 border border-zinc-900 hover:border-zinc-800'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-3">מטרה להכרות</label>
          <div className="grid grid-cols-3 gap-2">
            {GOAL_OPTIONS.map(option => (
              <button
                key={option.value}
                onClick={() => updateProfile({ goal: option.value })}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  profile.goal === option.value
                    ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                    : 'bg-zinc-900 text-zinc-500 border border-zinc-900 hover:border-zinc-800'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}