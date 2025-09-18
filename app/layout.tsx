import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="fa-IR" dir="rtl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/logo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
