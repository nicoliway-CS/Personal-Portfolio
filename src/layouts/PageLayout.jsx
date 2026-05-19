import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PageLayout({ children }) {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-8">{children}</main>
      <Footer />
    </div>
  );
}