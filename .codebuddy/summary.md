# Project Summary

VJ: A voice based AI that uses GPT functions to call up specific pages inside an iframe. It can be used to browse travel sites. Or show pictures. Or act as a video DJ who spins through content across YouTube and more. The AI voice should launch upon loading the page. The AI voice talks to the user and tells them what they're sharing and showing on the screen. The screen itself is the dominant element on the page. The AI assistant wrapper is kept on a bar at the bottom of the page.

The AI Web Surfing Agent is an advanced voice-based assistant designed to enhance user interaction with web content. Leveraging the power of GPT functions, this agent can dynamically call up specific pages within an iframe, providing users with a seamless and engaging browsing experience. Whether users want to explore travel sites, view pictures, or enjoy curated video content from platforms like YouTube, the AI agent handles it all. Upon loading the page, the AI voice is immediately activated, greeting the user and narrating the content displayed on the screen. This narration helps users stay informed about what is being shown and shared, making the browsing experience more interactive and informative.

The visual design of the web page ensures that the content displayed in the iframe remains the central focus. The screen's dominant element is the iframe, which showcases the web content selected by the AI. Below this primary display, an AI assistant wrapper is positioned on a bar at the bottom of the page, providing users with a sleek and unobtrusive interface to interact with the AI. This layout ensures that the user's attention remains on the content while still having easy access to the AI assistant's functionalities.

The implementation of the AI Web Surfing Agent involves several key components, as seen in the provided page.tsx files. The AssistantWrapper component is crucial for managing the AI interactions, including the function to change the iframe content (changeIframeContentFn). Additionally, the overall layout is designed to be responsive and user-friendly, featuring a header, a main content area with the iframe, and a footer. The integration of user data and a scroll area enhances the user experience by allowing easy navigation and interaction with different elements on the page. This thoughtful design and robust functionality make the AI Web Surfing Agent a powerful tool for enhancing web browsing through voice-based interactions.

## Overview
- **Languages**: TypeScript
- **Frameworks**: Next.js
- **Main Libraries**: FontAwesome, Radix UI, VAPI AI, Lucide React, Mongoose, OpenAI, Twilio
- **Build Tools**: ESLint, PostCSS, Tailwind CSS, TypeScript

## Purpose
The project is a Next.js frontend application for an AI assistant named VJ. It includes components, API routes, actions, models, and configuration files to interact with users at an event. The project utilizes various libraries for UI, AI, database connectivity, and communication. 

## Relevant Files
- `/next.config.mjs`
- `/package.json`
- `/tsconfig.json`
- `/postcss.config.mjs`
- `/components.json`
- `/src/actions/assistant-actions.tsx`
- `/src/app/layout.tsx`
- `/src/app/api/check/route.ts`
- `/src/config/connect-DB.ts`

## Source Files Directory
- Source files are located in the `/src` directory.
  - `/src/actions`: Contains assistant action files.
  - `/src/app`: Includes layout and page components.
  - `/src/app/api`: Houses API routes for different functionalities.
  - `/src/assistants`: Contains assistant-related files.
  - `/src/components`: Holds UI components.
  - `/src/components/ui`: Specific UI components.
  - `/src/config`: Configuration files.
  - `/src/hooks`: Custom hooks.
  - `/src/models`: Data models.
  - `/src/pages`: Page components.
  - `/src/styles`: Global styles.

## Documentation Files
- Documentation files can be found in the `/docs` directory.
  - `/docs/PEARL overview 042024.pdf`
  - `/docs/Pearl Design Document - 5_8_24.pdf`

This Next.js project serves as the frontend for an AI assistant application, providing a structured setup for interacting with users at an event through various API routes and actions.