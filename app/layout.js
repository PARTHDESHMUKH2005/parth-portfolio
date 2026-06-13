import "./globals.css";
import Nav from "./components/Nav";
import Ticker from "./components/Ticker";
import Footer from "./components/Footer";

export const metadata = {
  title: "Parth Deshmukh — AI/ML Engineer, Risk & Quantitative Systems",
  description:
    "Portfolio of Parth Deshmukh — AI/ML engineer building risk intelligence, credit modeling and predictive systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Ticker />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
