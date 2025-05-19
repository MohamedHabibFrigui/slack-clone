# Slack Clone

A modern, real-time messaging application built with Next.js and Convex, featuring workspace management, channels, direct messages, and more.

## Description

This project is a feature-rich Slack clone that demonstrates modern web development practices and real-time collaboration features. It includes workspace management, channel-based communication, direct messaging, file sharing, and emoji reactions, all powered by Convex's real-time database.

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Database & Backend**: Convex
- **Authentication**: Convex Auth
- **UI Components**: 
  - Radix UI
  - Tailwind CSS
  - Lucide React Icons
- **State Management**: Jotai
- **Rich Text Editor**: Quill
- **Date Handling**: date-fns
- **Development Tools**:
  - ESLint
  - TypeScript
  - PostCSS
  - Tailwind CSS

## Features

- 🔐 Secure authentication and authorization
- 👥 Workspace management with multiple members
- 📢 Channel-based communication
- 💬 Direct messaging between users
- 📝 Rich text message editor
- 📎 File sharing and attachments
- 😀 Emoji reactions
- 🎨 Modern, responsive UI
- 🌓 Dark/Light mode support
- ⚡ Real-time updates and notifications

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Convex account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/slack-clone.git
   cd slack-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Convex deployment URL:
   ```
   NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
slack/
├── convex/              # Convex backend functions and schema
│   ├── _generated/     # Generated Convex types
│   ├── auth.ts         # Authentication configuration
│   ├── auth.config.ts  # Auth configuration
│   ├── channels.ts     # Channel-related functions
│   ├── conversations.ts # Direct messaging functions
│   ├── http.ts         # HTTP utilities
│   ├── members.ts      # Member management functions
│   ├── messages.ts     # Message handling functions
│   ├── reactions.ts    # Emoji reactions functions
│   ├── schema.ts       # Database schema
│   ├── upload.ts       # File upload handling
│   ├── users.ts        # User management functions
│   ├── workspaces.ts   # Workspace management functions
│   └── tsconfig.json   # TypeScript configuration
├── public/             # Static assets
│   ├── logo.svg       # Application logo
│   ├── next.svg       # Next.js logo
│   └── vercel.svg     # Vercel logo
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # Reusable UI components
│   ├── features/      # Feature-specific components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   └── middleware.ts  # Next.js middleware
└── package.json       # Project dependencies and scripts
```

## API Documentation

The application uses Convex as its backend, which provides a real-time database and API. The main data models include:

- **Workspaces**: Organizations where users collaborate
- **Members**: Users within workspaces with specific roles
- **Channels**: Communication channels within workspaces
- **Conversations**: Direct messaging between members
- **Messages**: Communication content with support for text and attachments
- **Reactions**: Emoji reactions to messages

For detailed API documentation, refer to the [Convex documentation](https://docs.convex.dev/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

