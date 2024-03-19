import { MdDelete } from 'react-icons/md';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/sidebar/Sidebar';
import { SaveButton } from '@/styles/components/button/button.style';
import { MainInput } from '@/styles/components/input/input.style';
import '@/styles/pages/Home.css';
import '@/styles/pages/Home.media.css';
import Loading from '@/components/loading/Lodaing';
import { InputListType, ResponseDB } from '@/types';
import { API_URL, DELETE, POST } from '@/constant';

export default function Home() {
  // variables
  const [urlInput, setUrlInput] = useState<string>('');
  const [categoryInput, setCategoryInput] = useState<string>('');
  const [titleInput, setTitleInput] = useState<string>('');
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  const isInputEmpty = () => {
    return (
      urlInput.length !== 0 &&
      categoryInput.length !== 0 &&
      titleInput.length !== 0 &&
      descriptionInput.length !== 0
    );
  };

  const [category, setCategory] = useState<string[]>([]);
  const inputList: InputListType = [
    {
      placeholder: 'url',
      value: urlInput,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setUrlInput(e.target.value),
    },
    {
      placeholder: 'category',
      value: categoryInput,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setCategoryInput(e.target.value),
    },
    {
      placeholder: 'title',
      value: titleInput,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setTitleInput(e.target.value),
    },
    {
      placeholder: 'description',
      value: descriptionInput,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setDescriptionInput(e.target.value),
    },
  ];
  const renderList = () => {
    if (isLoading) return <Loading />;
    if (isSuccess) {
      if (saveList.length === 0) return <h1>저장된 링크가 없습니다.</h1>;
      return saveList.map((data: ResponseDB, index: number) => (
        <section key={index} className='list'>
          <div className='list-item'>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
          <div className='delete' onClick={() => handleClickDelete(data.title)}>
            <MdDelete style={{ width: '30px', height: '30px' }} />
          </div>
        </section>
      ));
    }
  };

  // fetching
  const {
    data: saveList,
    isLoading,
    isSuccess,
    refetch: refetchList,
  } = useQuery<ResponseDB[]>({
    queryKey: ['db'],
    queryFn: async () => {
      try {
        const res = await fetch(API_URL);
        return res.json();
      } catch (err) {
        console.log(err);
      }
    },
  });

  const { mutate: saveData } = useMutation({
    mutationKey: ['saveData'],
    mutationFn: async () => {
      try {
        const data = {
          url: urlInput,
          category: categoryInput,
          title: titleInput,
          description: descriptionInput,
        };
        const res = await fetch(`${API_URL}/save`, {
          method: POST,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return res.json();
      } catch (err) {
        console.log(err);
      }
    },
    onSuccess: () => {
      setCategoryInput('');
      setDescriptionInput('');
      setTitleInput('');
      setUrlInput('');
      refetchList();
    },
  });
  const { mutate: deleteData } = useMutation({
    mutationKey: ['deleteData'],
    mutationFn: async (title: string) => {
      const res = await fetch(`${API_URL}/delete/${title}`, {
        method: DELETE,
      });
      console.log('delete', res);
      return res.json();
    },
    onSuccess: () => {
      refetchList();
    },
  });

  // event function
  const handleClickSave = () => {
    if (categoryInput.startsWith('#')) {
      alert('#을 제거하고 카테고리를 입력하세요.');
      return;
    }
    if (!isInputEmpty()) {
      alert('입력하지 않은 항목이 있습니다.');
      return;
    }
    saveData();
  };

  const handleClickDelete = (title: string) => {
    deleteData(title);
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
              <MainInput
                key={index}
                type='text'
                placeholder={data.placeholder}
                value={data.value}
                onChange={data.onChange}
              />
            ))}
          </div>
          <SaveButton onClick={handleClickSave}>Save</SaveButton>
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
