import React from 'react';
import AssistantWrapper from '../components/assistant-wrapper';
import { changeIframeContent } from '../assistants/assistant';

const Home = () => {
  const changeIframeContentFn = (url: string) => {
    // Function implementation
  };

  return (
    <div>
      {/* Other components */}
      <AssistantWrapper changeIframeContentFn={changeIframeContentFn} />
    </div>
  );
};

export default Home;
