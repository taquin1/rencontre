import { useState, useEffect } from 'react';
import { UserProfile } from '../types';

const STORAGE_KEY = 'religious_dating_profile';

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>({ id: generateUserId() });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved profile', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    }
  }, [profile, isLoaded]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const resetProfile = () => {
    const newProfile: UserProfile = { id: generateUserId() };
    setProfile(newProfile);
    localStorage.removeItem(STORAGE_KEY);
  };

  const isComplete = !!profile.religion && !!profile.religiousLevel && !!profile.goal;

  return { profile, updateProfile, resetProfile, isComplete, isLoaded };
}

function generateUserId(): string {
  return `user_${Math.floor(Math.random() * 10000)}`;
}