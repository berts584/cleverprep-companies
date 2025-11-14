import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: "CleverPrep Companies | Interview Prep for Top Companies",
  description: "Get personalized interview preparation for 15+ top companies across multiple industries. $59 per company prep package.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
