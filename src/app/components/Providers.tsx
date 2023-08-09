//createContext only works in Client Components.Add the "use client" directive at the top of the file to use it.
"use client"

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
//NextAuth.js is a complete open-source authentication solution for Next.js applications.
//SessionProvider is a high-order component. It provides useSession hook support on the nextjs app. // _api.js.
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </>
  )
};