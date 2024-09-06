import Navigation from "@/components/UI/nav";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Footer from "@/components/UI/footer";
import Sidebar from "@/components/UI/sidebar";

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={ { backgroundColor: '#0C0C0D' } }>
        <Navigation />
        <br />
        <Sidebar>
          { children }
        </Sidebar>
        <Footer />
      </body>
    </html>
  );
}
