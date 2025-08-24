'use client';

import * as React from 'react';
import { AppContextProvider, useAppContext } from './contexts/app-context';
import { useTabActiveTime } from './hooks/use-tab-active-time';
import { formatMsToMinSec } from './utils/lib';

interface CompanionProps {
  direction?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  resetOnClick?: boolean;
}

function Companion({ direction = 'bottom-right', resetOnClick = false }: CompanionProps) {
  const { activeTime } = useTabActiveTime();
  const { resetActiveTime } = useAppContext();
  const formattedTime = formatMsToMinSec(activeTime);

  const isCatWakingUp = activeTime < 5000;

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
        className="p-2 rounded-full size-fit button peer cursor-pointer z-10 text-white bg-black "
      >
        <video
          className="size-10"
          autoPlay
          muted
          playsInline
          key={isCatWakingUp ? 'wakeup' : 'walk'}
          loop={!isCatWakingUp}
        >
          <source
            src={
              isCatWakingUp
                ? 'https://raw.githubusercontent.com/khxif/react-dev-companion/main/src/assets/cat-wakeup.mp4'
                : 'https://raw.githubusercontent.com/khxif/react-dev-companion/main/src/assets/cat-walk.mp4'
            }
            type="video/mp4"
          />
        </video>
      </button>

      <span
        className={`w-28 px-2 py-1 rounded-md absolute text-center mb-0.5
       text-xs hidden peer-hover:block bottom-full text-gray-200 bg-black
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
