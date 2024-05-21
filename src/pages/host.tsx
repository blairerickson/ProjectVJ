 
import React from 'react';

const EmbeddedPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://vapi.ai?demo=true&shareKey=3b273773-8a36-4bdc-aadd-939f41ddcd4a&assistantId=a33b04b8-5c10-4e5c-80a5-69deec525005"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Embedded VAPI"  allow="microphone" frameborder="0" allowfullscreen
      ></iframe>
    </div>
  );
};

export default EmbeddedPage;
