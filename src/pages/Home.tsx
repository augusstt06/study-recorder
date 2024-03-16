import Sidebar from '@/components/sidebar/Sidebar';
import { SaveButton } from '@/styles/components/button/button.style';
import { CategoryInput, MainInput } from '@/styles/components/input/input.style';
import '@/styles/pages/Home.css';
import '@/styles/pages/Home.media.css';

export default function Home() {
  const inputList = [{ placeholder: 'url' }, { placeholder: 'description' }];
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
            <CategoryInput type='text' placeholder='#category' />
          </div>
          <SaveButton>Save</SaveButton>
        </div>
      </section>
      <footer className='footer'>Footer</footer>
    </main>
  );
}
