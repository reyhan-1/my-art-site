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
      </Head>
      <Navbar />
      <main className="accent">
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
        <footer className="footer sm:footer-horizontal footer-center p-4">
  <aside>
    <p className="font-quicksand text-center text-sm"> © REYHAN UYANIK ART {new Date().getFullYear()} | WEBSITE BY Reyhan Uyanik</p>
  </aside>
</footer>
    </CartProvider>
  );
}
