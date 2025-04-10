import { Roboto } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "Instagram",
  description: "Maqueta de Instagram con Next.js",
  icons: {
    icon: "Instagram_icon.png",
  },
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
