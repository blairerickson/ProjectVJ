import React from 'react';

const EmbeddedPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://vapi.ai/?demo=true&shareKey=3b273773-8a36-4bdc-aadd-939f41ddcd4a&assistantId=debebf7e-1d20-48a0-a84e-d46e66739412"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Embedded VAPI" allow="microphone" frameBorder="0" allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedPage;
