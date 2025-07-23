import AppBarProvider from "../components/AppBarProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <AppBarProvider>
          {children}
        </AppBarProvider>
      </body>
    </html>
  );
}
