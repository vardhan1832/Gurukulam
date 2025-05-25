import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Gurukulam - Learn Your Passion',
  description: 'Your YouTube learning companion',
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-800">
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
