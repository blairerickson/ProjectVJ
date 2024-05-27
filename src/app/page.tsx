import AssistantWrapper from '@/components/assistant-wrapper';
import React from 'react';

const Page = () => {
  const changeIframeContent = (url: string) => {
    // Code to change the iframe content
  };

  return (
    <div>
      <header>
        {/* Existing header content */}
      </header>

      <AssistantWrapper changeIframeContentFn={changeIframeContent} />

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-8">
        <iframe
          src=""
          className="w-full h-96"
          title="AI Controlled Frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
