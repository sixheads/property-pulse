import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description:
    'Property Pulse is a rental property search engine that helps you find the perfect rental property.',
  keywords: 'rental, property, search, engine',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
