import '@/styles/pages/home/home.css';
import '@/styles/pages/home/home.media.css';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/sidebar/Sidebar';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <main className='home'>
      <Header />
      <Sidebar />
      <HomeContent />
      <Footer />
    </main>
  );
}
