import { Rubik } from "next/font/google";

import Header from "./_layout-components/Header";
// import PageWrapper from "./_layout-components/PageWrapper";

import "./globals.css";
import PageWrapper from "./_layout-components/PageWrapper";
import { UserProvider } from "./_components/UserContext";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "What to watch?",
  },
  description: "some page",
};

function Layout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={`${rubik.className}`}>
          <Header></Header>
          {/* <PageWrapper>{children}</PageWrapper> */}
          <main>{children}</main>
        </body>
      </html>
    </UserProvider>
  );
}

export default Layout;
