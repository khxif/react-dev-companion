import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AppStore {
  activeTime: number;
  setActiveTime: (time: number) => void;
}

export const useAppStore = create<AppStore>()(
  persist<AppStore>(
    set => ({
      activeTime: 0,
      setActiveTime: (time: number) => set({ activeTime: time }),
    }),
    {
      name: 'dev-companion',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
