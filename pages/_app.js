import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import SubscribeSection from "@/components/SubscribeSection";

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="accent">
            <Component {...pageProps} />
      </main>
        <SubscribeSection />
      <Footer />
      <footer className="footer sm:footer-horizontal bg-white footer-center p-4">
        <aside>
          <p className="font-quicksand text-center text-gray-800 text-sm">
            © REYHAN UYANIK ART {new Date().getFullYear()} | WEBSITE BY Reyhan Uyanik
          </p>
        </aside>
      </footer>
    </div>
  );
}
