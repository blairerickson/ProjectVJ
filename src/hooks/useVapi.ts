import { useState, useEffect, useCallback } from 'react';

export const CALL_STATUS = {
  INACTIVE: 'inactive',
  LOADING: 'loading',
  ACTIVE: 'active',
};

export const useVapi = () => {
  const [callStatus, setCallStatus] = useState(CALL_STATUS.INACTIVE);
  const [audioLevel, setAudioLevel] = useState(0);

  const startCall = useCallback(() => {
    setCallStatus(CALL_STATUS.LOADING);
    // Simulate API call to start the assistant
    setTimeout(() => {
      setCallStatus(CALL_STATUS.ACTIVE);
    }, 1000);
  }, []);

  const toggleCall = useCallback(() => {
    if (callStatus === CALL_STATUS.ACTIVE) {
      setCallStatus(CALL_STATUS.INACTIVE);
    } else {
      startCall();
    }
  }, [callStatus, startCall]);

  useEffect(() => {
    if (callStatus === CALL_STATUS.INACTIVE) {
      startCall();
    }
  }, [callStatus, startCall]);

  useEffect(() => {
    if (callStatus === CALL_STATUS.ACTIVE) {
      const utterance = new SpeechSynthesisUtterance('Hello!');
      window.speechSynthesis.speak(utterance);
    }
  }, [callStatus]);

  return {
    callStatus,
    audioLevel,
    startCall,
    toggleCall,
  };
};
