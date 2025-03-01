import type { Metadata } from "next";
import "./globals.scss"; // 
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/common.scss";
export const metadata: Metadata = {
  title: "リアクトテストのトップページです",
  description: "リアクトテストのディスクリンプションです",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
