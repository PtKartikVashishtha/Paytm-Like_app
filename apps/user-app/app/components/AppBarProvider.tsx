// components/AppBarProvider.tsx

import { AppBar } from "./AppBar";

export default function AppBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar label="Logout" />
      {children}
    </>
  );
}
