"use client" ;

import { SessionProvider } from "next-auth/react";

//create session provider for next-auth
export const NextSessionProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}