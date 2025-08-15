import * as React from 'react';

interface AppContextType {
  activeTime: number;
  updateActiveTime: (time: number) => void;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [activeTime, setActiveTime] = React.useState<number>(() => {
    const stored = localStorage.getItem('@dev-companion/active-time');
    return stored ? JSON.parse(stored) : 0;
  });

  const updateActiveTime = (time: number) => {
    setActiveTime(time);
    localStorage.setItem('@dev-companion/active-time', JSON.stringify(time));
  };

  const resetActiveTime = () => {
    setActiveTime(0);
    localStorage.setItem('@dev-companion/active-time', JSON.stringify(0));
  };

  return (
    <AppContext.Provider value={{ activeTime, updateActiveTime, resetActiveTime }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');

  return context;
};
