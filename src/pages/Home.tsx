import Sidebar from '@/components/sidebar/Sidebar';
import '@/styles/pages/Home.css';

export default function Home() {
  return (
    <main className='home'>
      <header className='header'>
        <h1>augusst's Recorder</h1>
      </header>
      <aside>
        <Sidebar />
      </aside>
      <section className='content'>Main</section>
      <footer className='footer'>Footer</footer>
    </main>
  );
}
