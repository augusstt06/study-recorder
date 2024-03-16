import Sidebar from '@/components/sidebar/Sidebar';
import { SaveButton } from '@/styles/components/button/button.style';
import { MainInput } from '@/styles/components/input/input.style';
import '@/styles/pages/Home.css';
import '@/styles/pages/Home.media.css';

export default function Home() {
  const inputList = [
    { placeholder: 'url' },
    { placeholder: '#category' },
    { placeholder: 'title' },
    { placeholder: 'description' },
  ];
  return (
    <main className='home'>
      <header className='header'>
        <h1>augusst's Recorder</h1>
      </header>
      <aside>
        <Sidebar />
      </aside>
      <section className='content'>
        <div className='main-top'>
          <div className='input-group'>
            {inputList.map((data, index) => (
              <MainInput type='text' placeholder={data.placeholder} key={index} />
            ))}
          </div>
          <SaveButton>Save</SaveButton>
        </div>
        <div className='main-list'>
          <h1>저장된 링크가 없습니다.</h1>
          <div className='list-item'>
            <p>GitHub</p>
            <p>내 포트폴리오</p>
            <p>#Github</p>
          </div>
        </div>
      </section>
      <footer className='footer'>Footer</footer>
    </main>
  );
}
