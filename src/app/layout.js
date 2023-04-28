import Header from "../../components/Header";
import Feed from "../../components/Feed";
import "./globals.css";

export const metadata = {
  title: "Insta App",
  description: "Criando o insta com react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen">
        <Header />
        {/*Feed*/}
        <Feed />
        {children}
      </body>
    </html>
  );
}
