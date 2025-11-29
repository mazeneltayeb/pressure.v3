
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavigationBar from "@/components/Navbar";
import BottomAd from "@/components/BottomAd";
import Footer from "@/components/Footer";
import ClientLayout from "./ClientLayout"; // ده هنضيفه بعد شوية







export const metadata = {
  title: "temple",
  description: "موقع عربي لمتابعة المقالات والأسعار والبورصة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>
        <ClientLayout>
          <NavigationBar />
          {children}
          <BottomAd />
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
