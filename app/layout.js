import Header from "./_layout-components/Header";
import "./globals.css";
function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}

export default Layout;
