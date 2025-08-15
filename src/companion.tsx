'use client';

import { useTabActiveTime } from './hooks/use-tab-active-time';
import { formatMsToMinSec } from './utils/lib';
import CatWalking from './assets/cat-walk.mp4';
import { AppContextProvider, useAppContext } from './contexts/app-context';

interface CompanionProps {
  direction?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  theme?: 'light' | 'dark';
}

export function Companion({ direction = 'bottom-right', theme = 'dark' }: CompanionProps) {
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
        onClick={resetActiveTime}
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
       text-xs hidden peer-hover:block bottom-full -left-5 
       ${theme === 'light' ? 'bg-white text-black' : 'text-gray-200 bg-black'}`}
      >
        {formattedTime}
      </span>
    </div>
  );
}

export function CompanionWrapper({ ...props }: CompanionProps) {
  return (
    <AppContextProvider>
      <Companion {...props} />
    </AppContextProvider>
  );
}
