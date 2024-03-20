import { categoryStore } from '@/store/store';
import '@/styles/components/sidebar/Sidebar.css';
import { SidebarProps } from '@/types/components';
import { matchingIcon } from '@/utils/matchingIcon';
import { useEffect, useState } from 'react';
import { MdSaveAs } from 'react-icons/md';

export default function Sidebar(props: SidebarProps) {
  const { setCategory } = categoryStore();
  const [categoryMenu, setCategoryMenu] = useState<{ icon: JSX.Element; title: string }[]>([]);
  const { categoryList } = props;
  const shortcutMenu = [
    { icon: <MdSaveAs style={{ width: '25px', height: '25px' }} />, title: 'Current Save' },
  ];

  useEffect(() => {
    const convertObject = categoryList.map((data) => matchingIcon(data.slice(1)));
    setCategoryMenu(convertObject);
  }, [categoryList]);

  return (
    <section className='sidebar'>
      <input type='text' />
      <div className='menu-wrapper'>
        {shortcutMenu.map((data, index) => (
          <div className='menu' key={index}>
            {data.icon}
            <p>{data.title}</p>
          </div>
        ))}
      </div>
      <div className='menu-title'>
        <p>category</p>
      </div>
      <div className='menu-wrapper'>
        {categoryMenu.map((data, index) => (
          <div
            className='menu'
            key={index}
            onClick={() => {
              setCategory(data.title);
            }}
          >
            {data.icon}
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
