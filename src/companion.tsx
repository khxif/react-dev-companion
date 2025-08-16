'use client';

import * as React from 'react';
import CatWalking from './assets/cat-walk.mp4';
import { AppContextProvider, useAppContext } from './contexts/app-context';
import { useTabActiveTime } from './hooks/use-tab-active-time';
import { formatMsToMinSec } from './utils/lib';

interface CompanionProps {
  direction?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  theme?: 'light' | 'dark';
  resetOnClick?: boolean;
}

function Companion({
  direction = 'bottom-right',
  theme = 'dark',
  resetOnClick = false,
}: CompanionProps) {
  const { activeTime } = useTabActiveTime();
  const { resetActiveTime } = useAppContext();
  const formattedTime = formatMsToMinSec(activeTime);

  return (
    <div
      className={`fixed flex flex-col 
      ${direction === 'top-left' ? 'top-8 left-6' : ''} 
      ${direction === 'top-right' ? 'top-8 right-6' : ''}
      ${direction === 'bottom-left' ? 'bottom-8 left-6' : ''}
      ${direction === 'bottom-right' ? 'bottom-8 right-6' : ''}
      `}
    >
      <button
        {...(resetOnClick && { onClick: resetActiveTime })}
        className={`p-2 rounded-full size-fit button peer cursor-pointer z-10
          ${theme === 'light' ? 'bg-white text-black' : 'text-white bg-black'}
          `}
      >
        <video loop className="size-10" autoPlay muted playsInline>
          <source src={CatWalking} type="video/mp4" />
        </video>
      </button>

      <span
        className={`w-28 px-2 py-1 rounded-md absolute text-center mb-0.5
       text-xs hidden peer-hover:block bottom-full  
        ${theme === 'light' ? 'bg-white text-black' : 'text-gray-200 bg-black'}
        ${direction === 'top-left' ? '-left-5' : ''} 
        ${direction === 'top-right' ? '-right-6' : ''}
        ${direction === 'bottom-left' ? '-left-5' : ''}
        ${direction === 'bottom-right' ? '-right-6' : ''}
       `}
      >
        {formattedTime}
      </span>
    </div>
  );
}

export function CompanionWrapper({ ...props }: CompanionProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <AppContextProvider>
      <Companion {...props} />
    </AppContextProvider>
  );
}
