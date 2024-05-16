'use client';

import React from 'react';
import { AssistantButton } from './assistant-button';
import { useVapi } from '@/hooks/useVapi';

const AssistantWrapper = () => {
  const { toggleCall, callStatus, audioLevel, activeTranscript } = useVapi();

  return (
    <div className='mt-auto'>
      <AssistantButton
        audioLevel={audioLevel}
        callStatus={callStatus}
        toggleCall={toggleCall}
      ></AssistantButton>
      <p className='text-xs mt-5'>{callStatus}</p>
    </div>
  );
};

export default AssistantWrapper;
