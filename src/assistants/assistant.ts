"use client";
import { FC, useState } from 'react';

interface AssistantWrapperProps {
  changeIframeContentFn: (url: string) => void;
}

const AssistantWrapper: FC<AssistantWrapperProps> = ({ changeIframeContentFn }) => {
  const [iframeUrl, setIframeUrl] = useState<string>('');

  const handleIframeContentChange = (url: string) => {
    setIframeUrl(url);
    changeIframeContentFn(url);
  };

  return (
    <div>
      <button onClick={() => handleIframeContentChange('https://www.youtube.com')}>
        Change Iframe Content
      </button>
      <iframe
        src={iframeUrl}
        className="w-full h-96"
        title="AI Controlled Frame"
      ></iframe>
    </div>
  );
};

export default AssistantWrapper;
