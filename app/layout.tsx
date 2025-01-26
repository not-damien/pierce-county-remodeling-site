import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
export const metadata: Metadata = {
  title: "Pierce County Remodeling",
  description:
    "Whether you're looking to update your kitchen, remodel your bathroom, or give your entire home a facelift, we're here to help. Our experienced team is dedicated to providing top-quality craftsmanship and customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
