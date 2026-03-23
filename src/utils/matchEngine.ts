import { UserProfile, MatchProfile } from '../types';

export const RELIGION_COMPATIBILITY: Record<string, string[]> = {
  'judaism': ['judaism'],
  'islam': ['islam'],
  'orthodox-christianity': ['orthodox-christianity'],
  'druze': ['druze'],
  'sikh': ['sikh'],
};

export const RELIGIOUS_LEVEL_ORDER: Record<string, number> = {
  'secular': 1,
  'traditional': 2,
  'national-religious': 3,
  'haredi-liberal': 4,
  'haredi-moderate': 5,
};

export const mockMatches: MatchProfile[] = [
  { id: 'match_1', age: 28, religion: 'judaism', religiousLevel: 'national-religious', customs: ['shabbat', 'kosher', 'daily-study'], goal: 'marriage' },
  { id: 'match_2', age: 32, religion: 'judaism', religiousLevel: 'haredi-liberal', customs: ['shabbat', 'kosher', 'separation', 'religious-dress'], goal: 'marriage' },
  { id: 'match_3', age: 25, religion: 'islam', religiousLevel: 'traditional', customs: ['daily-study', 'religious-dress'], goal: 'serious-relationship' },
  { id: 'match_4', age: 30, religion: 'judaism', religiousLevel: 'traditional', customs: ['shabbat'], goal: 'serious-relationship' },
  { id: 'match_5', age: 35, religion: 'judaism', religiousLevel: 'haredi-moderate', customs: ['shabbat', 'kosher', 'separation', 'pilgrimage', 'daily-study', 'religious-dress'], goal: 'marriage' },
  { id: 'match_6', age: 27, religion: 'orthodox-christianity', religiousLevel: 'traditional', customs: ['daily-study'], goal: 'study-sharing' },
  { id: 'match_7', age: 29, religion: 'druze', religiousLevel: 'traditional', customs: ['pilgrimage', 'religious-dress'], goal: 'marriage' },
  { id: 'match_8', age: 31, religion: 'judaism', religiousLevel: 'national-religious', customs: ['shabbat', 'kosher', 'separation'], goal: 'marriage' },
  { id: 'match_9', age: 26, religion: 'judaism', religiousLevel: 'haredi-liberal', customs: ['shabbat', 'kosher', 'daily-study', 'religious-dress'], goal: 'serious-relationship' },
  { id: 'match_10', age: 33, religion: 'judaism', religiousLevel: 'traditional', customs: ['shabbat', 'kosher'], goal: 'marriage' },
];

export function findMatches(userProfile: UserProfile): MatchProfile[] {
  if (!userProfile.religion || !userProfile.religiousLevel) {
    return [];
  }

  const userLevelScore = RELIGIOUS_LEVEL_ORDER[userProfile.religiousLevel];
  const compatibleReligions = RELIGION_COMPATIBILITY[userProfile.religion] || [userProfile.religion];
  const requiredCustoms = userProfile.customs || [];

  return mockMatches.filter(match => {
    if (!compatibleReligions.includes(match.religion)) {
      return false;
    }

    const matchLevelScore = RELIGIOUS_LEVEL_ORDER[match.religiousLevel];
    if (matchLevelScore < userLevelScore) {
      return false;
    }

    if (requiredCustoms.length > 0) {
      const hasAllRequiredCustoms = requiredCustoms.every(custom => match.customs.includes(custom));
      if (!hasAllRequiredCustoms) {
        return false;
      }
    }

    return true;
  });
}