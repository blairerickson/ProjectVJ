import React from 'react';
import AssistantWrapper from '../components/assistant-wrapper';
import { changeIframeContent } from '../assistants/assistant';

const Home = () => {
  const changeIframeContent = (url: string) => {
    // Function implementation
  };

  return (
    <div>
      {/* Other components */}
      <AssistantWrapper changeIframeContentFn={changeIframeContent} />
    </div>
  );
};

export default Home;
