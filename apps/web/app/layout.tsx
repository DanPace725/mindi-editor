import "@/styles/globals.css";
import "@/styles/prosemirror.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";

const title =
  "Mindi - Your Conversational Companion and Memory Aide";
const description =
  "Meet Mindi, the fusion of conversational AI and advanced note-taking, designed to remember so you don't have to. Effortlessly toggle between engaging chats and organized note-taking. With Mindi, every conversation enriches your notes, creating a dynamic, searchable memory bank. Mindi doesn't just respond; it recalls, stores, and organizes your thoughts and interactions seamlessly";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "",
    creator: "",
  },
  metadataBase: new URL(""),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
