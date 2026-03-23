export type Religion = 'judaism' | 'islam' | 'orthodox-christianity' | 'druze' | 'sikh';

export type ReligiousLevel = 'secular' | 'traditional' | 'national-religious' | 'haredi-liberal' | 'haredi-moderate';

export type Custom = 'shabbat' | 'kosher' | 'separation' | 'pilgrimage' | 'daily-study' | 'religious-dress';

export type Goal = 'marriage' | 'serious-relationship' | 'study-sharing';

export interface UserProfile {
  id: string;
  religion?: Religion;
  religiousLevel?: ReligiousLevel;
  customs?: Custom[];
  goal?: Goal;
}

export interface MatchProfile {
  id: string;
  age: number;
  religion: Religion;
  religiousLevel: ReligiousLevel;
  customs: Custom[];
  goal: Goal;
}