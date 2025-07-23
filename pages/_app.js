import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function App({ Component, pageProps, router }) {
  return (
    <CartProvider>
      <Head>
        <link
        />
        <link
        />
      </Head>
      <Navbar />
      <main className="accent text-base-content">
        {/* Wrap the Component in motion.div */}
        <motion.div
          key={router.route} // This makes sure the animation resets on every route change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </main>
      <Footer />
    </CartProvider>
  );
}
