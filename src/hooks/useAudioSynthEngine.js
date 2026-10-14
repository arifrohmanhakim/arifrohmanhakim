import { useState, useCallback, useRef } from 'react';

export const useAudioSynthEngine = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const audioContextRef = useRef(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioContextRef.current = new AudioContextClass();
      }
    }
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  const playTone = useCallback((frequency = 440, type = 'sine', duration = 0.08, gainValue = 0.06) => {
    if (!isAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      gain.gain.setValueAtTime(gainValue, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Fallback diam jika audio API diblokir browser policy
    }
  }, [isAudioEnabled, getAudioContext]);

  const playClick = useCallback(() => {
    playTone(800, 'triangle', 0.04, 0.04);
  }, [playTone]);

  const playToggle = useCallback(() => {
    playTone(520, 'sine', 0.06, 0.05);
    setTimeout(() => playTone(680, 'sine', 0.08, 0.05), 60);
  }, [playTone]);

  const playSuccess = useCallback(() => {
    playTone(440, 'sine', 0.06, 0.05);
    setTimeout(() => playTone(554.37, 'sine', 0.06, 0.05), 70);
    setTimeout(() => playTone(659.25, 'sine', 0.12, 0.06), 140);
  }, [playTone]);

  const toggleAudio = useCallback(() => {
    setIsAudioEnabled((prev) => {
      const nextState = !prev;
      if (nextState) {
        getAudioContext();
      }
      return nextState;
    });
  }, [getAudioContext]);

  return {
    isAudioEnabled,
    toggleAudio,
    playClick,
    playToggle,
    playSuccess
  };
};
