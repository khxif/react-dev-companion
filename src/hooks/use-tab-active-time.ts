import * as React from 'react';
import { useAppContext } from '../contexts/app-context';

const BREAK_TIMEOUT = 180000;
const INACTIVITY_TIMEOUT = 30000;

export function useTabActiveTime() {
  const { activeTime, updateActiveTime, resetActiveTime } = useAppContext();

  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const breakRef = React.useRef<number | null>(null);
  const inactivityTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);


  const resetInactivityTimer = React.useCallback(() => {
    if (inactivityTimeoutRef.current !== null) clearTimeout(inactivityTimeoutRef.current);

    inactivityTimeoutRef.current = setTimeout(() => {
      resetActiveTime();
    }, INACTIVITY_TIMEOUT);
  }, [resetActiveTime]);

  React.useEffect(() => {
    const startTimer = () => {
      if (intervalRef.current !== null) return;

      intervalRef.current = setInterval(() => {
        updateActiveTime(activeTime + 1000);
      }, 1000);
    };

    const stopTimer = () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    if (!document.hidden) startTimer();
    else breakRef.current = Date.now();

    const onVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
        breakRef.current = Date.now();
        return;
      }

      if (breakRef.current !== null) {
        const breakTime = Date.now() - breakRef.current;
        breakRef.current = null;

        if (breakTime > BREAK_TIMEOUT) resetActiveTime()
        else updateActiveTime(activeTime + breakTime);
      }
      startTimer();
    };

    const onUserActivity = () => {
      resetInactivityTimer();
      if (!intervalRef.current) startTimer();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    events.forEach(event => document.addEventListener(event, onUserActivity));

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      events.forEach(event => document.removeEventListener(event, onUserActivity));
    };
  }, [updateActiveTime, activeTime, resetInactivityTimer]);

  return { activeTime };
}

const events = ['mousemove', 'keydown', 'scroll', 'click', 'scroll'];
