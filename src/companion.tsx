'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { AppContextProvider, useAppContext } from './contexts/app-context';
import { useTabActiveTime } from './hooks/use-tab-active-time';
import { formatMsToMinSec } from './utils/lib';

interface CompanionProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  resetOnClick?: boolean;
}

function Companion({ position = 'bottom-right', resetOnClick = false }: CompanionProps) {
  const { activeTime } = useTabActiveTime();
  const { resetActiveTime } = useAppContext();
  const formattedTime = formatMsToMinSec(activeTime);

  const isCatWakingUp = activeTime < 5000;
  const isCatTired = activeTime > 1500000;

  return (
    <div
      className={`fixed flex flex-col z-[999] pointer-events-none
      ${position === 'top-left' ? 'top-8 left-6' : ''} 
      ${position === 'top-right' ? 'top-8 right-6' : ''}
      ${position === 'bottom-left' ? 'bottom-8 left-6' : ''}
      ${position === 'bottom-right' ? 'bottom-8 right-6' : ''}
      `}
    >
      <button
        {...(resetOnClick && { onClick: resetActiveTime })}
        className="pointer-events-auto p-2.5 rounded-full size-fit button peer cursor-pointer z-10 text-white bg-black "
      >
        <video
          className="size-12"
          autoPlay
          muted
          playsInline
          key={isCatWakingUp ? 'wakeup' : isCatTired ? 'tired' : 'walk'}
          loop={!isCatWakingUp}
        >
          <source
            src={
              isCatWakingUp
                ? 'https://raw.githubusercontent.com/khxif/react-dev-companion/main/src/assets/cat-wakeup.mp4'
                : isCatTired
                ? 'https://raw.githubusercontent.com/khxif/react-dev-companion/main/src/assets/cat-tired.mp4'
                : 'https://raw.githubusercontent.com/khxif/react-dev-companion/main/src/assets/cat-walk.mp4'
            }
            type="video/mp4"
          />
        </video>
      </button>

      <span
        className={`w-28 px-2 py-1 rounded-md absolute text-center mb-0.5
       text-xs hidden peer-hover:block bottom-full text-gray-200 bg-black
        ${position === 'top-left' ? '-left-5' : ''}
        ${position === 'top-right' ? '-right-6' : ''}
        ${position === 'bottom-left' ? '-left-5' : ''}
        ${position === 'bottom-right' ? '-right-6' : ''}
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

  return createPortal(
    <AppContextProvider>
      <Companion {...props} />
    </AppContextProvider>,
    document.body,
  );
}
