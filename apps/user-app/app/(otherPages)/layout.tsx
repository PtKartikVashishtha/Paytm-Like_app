import AppBarProvider from "../components/AppBarProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 overflow-x-hidden">
        <AppBarProvider>
          {children}
        </AppBarProvider>
      </body>
    </html>
  );
}
