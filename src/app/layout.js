import Header from "../../components/Header";
import "./globals.css";

export const metadata = {
  title: "Insta App",
  description: "Criando o insta com react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
