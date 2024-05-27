This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## PROJECT OVERVIEW 

VJ: A voice based AI that uses GPT functions to call up specific pages inside an iframe. It can be used to browse travel sites. Or show pictures. Or act as a video DJ who spins through content across YouTube and more. The AI voice should launch upon loading the page. The AI voice talks to the user and tells them what they're sharing and showing on the screen. The screen itself is the dominant element on the page. The AI assistant wrapper is kept on a bar at the bottom of the page.

The AI Web Surfing Agent is an advanced voice-based assistant designed to enhance user interaction with web content. Leveraging the power of GPT functions, this agent can dynamically call up specific pages within an iframe, providing users with a seamless and engaging browsing experience. Whether users want to explore travel sites, view pictures, or enjoy curated video content from platforms like YouTube, the AI agent handles it all. Upon loading the page, the AI voice is immediately activated, greeting the user and narrating the content displayed on the screen. This narration helps users stay informed about what is being shown and shared, making the browsing experience more interactive and informative.

The visual design of the web page ensures that the content displayed in the iframe remains the central focus. The screen's dominant element is the iframe, which showcases the web content selected by the AI. Below this primary display, an AI assistant wrapper is positioned on a bar at the bottom of the page, providing users with a sleek and unobtrusive interface to interact with the AI. This layout ensures that the user's attention remains on the content while still having easy access to the AI assistant's functionalities.

The implementation of the AI Web Surfing Agent involves several key components, as seen in the provided page.tsx files. The AssistantWrapper component is crucial for managing the AI interactions, including the function to change the iframe content (changeIframeContentFn). Additionally, the overall layout is designed to be responsive and user-friendly, featuring a header, a main content area with the iframe, and a footer. The integration of user data and a scroll area enhances the user experience by allowing easy navigation and interaction with different elements on the page. This thoughtful design and robust functionality make the AI Web Surfing Agent a powerful tool for enhancing web browsing through voice-based interactions.


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
