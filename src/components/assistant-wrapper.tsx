import { FC, useState } from 'react';

interface AssistantWrapperProps {
  changeIframeContentFn: (url: string) => void;
}

const AssistantWrapper: FC<AssistantWrapperProps> = ({ changeIframeContentFn }) => {
  const [iframeUrl, setIframeUrl] = useState<string>('');

  // Code to handle AI interactions
  // When AI decides to change the iframe content, it calls changeIframeContentFn(url)
  // Example:
  // changeIframeContentFn('https://www.youtube.com');

  const handleIframeContentChange = (url: string) => {
    setIframeUrl(url);
    changeIframeContentFn(url);
  };

  return (
    <div>
      {/* Existing Assistant Button Code */}
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
