import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
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
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
