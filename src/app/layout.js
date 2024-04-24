import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/UI/nav";
import Footer from "@/components/UI/footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code with Nitin | Learn | Code | Build ",
  description: `
  Code with Nitin | Learn | Code | Build" - A platform dedicated to empowering learners with comprehensive coding tutorials and resources. From foundational concepts to advanced techniques, embark on a journey of skill acquisition and project development. Master programming languages, frameworks, and tools while building real-world projects. Let's dive into the world of coding together and unlock endless possibilities in the digital realm. `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Head>
          <meta name="google-adsense-account" content="ca-pub-8460040938315147" />
        </Head>
        <Navigation />
        { children }
        <SpeedInsights />
        <Analytics />
        <Footer />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8460040938315147"
          crossorigin="anonymous"></script>
      </body>
    </html>
  );
}
