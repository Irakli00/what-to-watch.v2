import { Rubik } from "next/font/google";

import Header from "./_layout-components/Header";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "What to watch?",
  },
  description: "some page about hotels",
};

function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}

export default Layout;
