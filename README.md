This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## PROJECT OVERVIEW 

VJ: A voice based AI that uses GPT functions to call up specific pages inside an iframe. It can be used to browse travel sites. Or show pictures. Or act as a video DJ who spins through content across YouTube and more. The AI voice should launch upon loading the page. The AI voice talks to the user and tells them what they're sharing and showing on the screen. The screen itself is the dominant element on the page. The AI assistant wrapper is kept on a bar at the bottom of the page.

The AI Web Surfing Agent is an advanced voice-based assistant designed to enhance user interaction with web content. Leveraging the power of GPT functions, this agent can dynamically call up specific pages within an iframe, providing users with a seamless and engaging browsing experience. Whether users want to explore travel sites, view pictures, or enjoy curated video content from platforms like YouTube, the AI agent handles it all. Upon loading the page, the AI voice is immediately activated, greeting the user and narrating the content displayed on the screen. This narration helps users stay informed about what is being shown and shared, making the browsing experience more interactive and informative.

The visual design of the web page ensures that the content displayed in the iframe remains the central focus. The screen's dominant element is the iframe, which showcases the web content selected by the AI. Below this primary display, an AI assistant wrapper is positioned on a bar at the bottom of the page, providing users with a sleek and unobtrusive interface to interact with the AI. This layout ensures that the user's attention remains on the content while still having easy access to the AI assistant's functionalities.

The implementation of the AI Web Surfing Agent involves several key components, as seen in the provided page.tsx files. The AssistantWrapper component is crucial for managing the AI interactions, including the function to change the iframe content (changeIframeContentFn). Additionally, the overall layout is designed to be responsive and user-friendly, featuring a header, a main content area with the iframe, and a footer. The integration of user data and a scroll area enhances the user experience by allowing easy navigation and interaction with different elements on the page. This thoughtful design and robust functionality make the AI Web Surfing Agent a powerful tool for enhancing web browsing through voice-based interactions.

The AI Web Surfing Agent is a sophisticated voice-activated application designed to enhance online browsing experiences by embedding a dynamic voice interface directly into a web page. Upon page load, the AI voice activates, guiding users through various online content such as travel sites, image galleries, and video collections on platforms like YouTube. The application utilizes advanced GPT functions to interact with users, fetching and displaying web pages inside an iframe, making it a versatile tool for both casual browsing and specific content discovery.

Key Features and Design

Voice-Activated Interface: The AI voice initiates immediately as the page loads, providing a seamless and engaging user experience. It communicates actively with users, narrating what is being displayed on the screen. This feature makes the browsing experience more interactive and accessible, especially for users who prefer auditory learning or those with visual impairments.

Content Management: Through the AssistantWrapper component, the AI has the capability to alter iframe content dynamically based on voice commands. This adaptability allows users to command the AI to switch between different types of web content, from viewing travel destinations to watching videos or browsing through photo galleries. The iframe, occupying a prominent space on the screen, ensures that content is the focal point of the user experience.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
