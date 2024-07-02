export const metadata = {
  title: "Blowgga App",
  description: "Your one stop blog site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
          <nav className="w-3/12">
            sideBar
          </nav>
          <main className="w-8/12">
            {children}
          </main>  
        </body>
    </html>
  );
}
