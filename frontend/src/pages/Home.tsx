import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/sidebar/Sidebar';
import { SaveButton } from '@/styles/components/button/button.style';
import { MainInput } from '@/styles/components/input/input.style';
import '@/styles/pages/Home.css';
import '@/styles/pages/Home.media.css';
import Loading from '@/components/loading/Lodaing';
import { ResponseDB } from '@/types';
import { API_URL, GET } from '@/constant';

export default function Home() {
  const [category, setCategory] = useState<string[]>([]);
  const inputList = [
    { placeholder: 'url' },
    { placeholder: '#category' },
    { placeholder: 'title' },
    { placeholder: 'description' },
  ];
  const {
    data: saveList,
    isLoading,
    isSuccess,
  } = useQuery<ResponseDB[]>({
    queryKey: ['db'],
    queryFn: async () => {
      const res = await fetch(API_URL, {
        method: GET,
      });
      return res.json();
    },
  });

  const renderList = () => {
    if (isLoading) return <Loading />;
    if (isSuccess) {
      if (saveList.length === 0) return <h1>저장된 링크가 없습니다.</h1>;
      return saveList.map((data: ResponseDB, index: number) => (
        <div className='list-item' key={index}>
          <p>{data.title}</p>
          <p>{data.description}</p>
        </div>
      ));
    }
  };

  useEffect(() => {
    if (isSuccess) setCategory(saveList.map((data: ResponseDB) => data.category));
  }, [saveList, isSuccess]);

  return (
    <main className='home'>
      <header className='header'>
        <h1>augusst's Recorder</h1>
      </header>
      <aside>
        <Sidebar category={category} />
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
          {/* FIXME: 선택한 카테고리 default는 all */}
          <h1>#All</h1>
          {renderList()}
        </div>
      </section>
      <footer className='footer'>
        <Footer />
      </footer>
    </main>
  );
}
