import { MatchProfile } from '../types';
import { Users, Calendar } from 'lucide-react';

interface MatchCardProps {
  match: MatchProfile;
}

const CUSTOM_LABELS: Record<string, { label: string }> = {
  'shabbat': { label: 'שומר שבת' },
  'kosher': { label: 'כשרות' },
  'separation': { label: 'הפרדה' },
  'pilgrimage': { label: 'עלייה לרגל' },
  'daily-study': { label: 'לימוד יומי' },
  'religious-dress': { label: 'לבוש דתי' },
};

const RELIGION_LABELS: Record<string, string> = {
  'judaism': 'יהדות',
  'islam': 'אסלאם',
  'orthodox-christianity': 'נצרות אורתודוקסית',
  'druze': 'דרוזים',
  'sikh': 'סיקים',
};

const LEVEL_LABELS: Record<string, string> = {
  'secular': 'חילוני',
  'traditional': 'מסורתי',
  'national-religious': 'דתי לאומי',
  'haredi-liberal': 'חרדי-ליברלי',
  'haredi-moderate': 'חרדי-מתון',
};

const GOAL_LABELS: Record<string, string> = {
  'marriage': 'נישואין',
  'serious-relationship': 'קשר רציני',
  'study-sharing': 'לימוד/שיתוף',
};

export function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0 border border-zinc-800">
          <Users className="w-6 h-6 text-zinc-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-zinc-500 text-sm font-mono">משתמש_{match.id.split('_')[1]}</span>
            <span className="text-zinc-800">•</span>
            <span className="text-zinc-400 text-sm">{match.age}</span>
          </div>
          
          <div className="mb-3">
            <span className="text-zinc-100 font-medium text-sm">
              {RELIGION_LABELS[match.religion]}
            </span>
            <span className="text-zinc-800 mx-2">•</span>
            <span className="text-zinc-500 text-sm">
              {LEVEL_LABELS[match.religiousLevel]}
            </span>
          </div>
          
          {match.customs.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {match.customs.map(custom => (
                <span
                  key={custom}
                  className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-400"
                >
                  {CUSTOM_LABELS[custom]?.label}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <Calendar className="w-4 h-4" />
            <span>{GOAL_LABELS[match.goal]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}