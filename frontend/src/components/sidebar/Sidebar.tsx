import '@/styles/components/sidebar/Sidebar.css';
import { SidebarProps } from '@/types/components';
import { matchingIcon } from '@/utils/matchingIcon';
import { useEffect, useState } from 'react';
import { MdSaveAs } from 'react-icons/md';

export default function Sidebar(props: SidebarProps) {
  const [categoryMenu, setCategoryMenu] = useState<{ icon: JSX.Element; title: string }[]>([]);
  const { category } = props;
  const shortcutMenu = [
    { icon: <MdSaveAs style={{ width: '25px', height: '25px' }} />, title: 'Current Save' },
  ];

  useEffect(() => {
    const convertObject = category.map((data) => matchingIcon(data.slice(1).toUpperCase()));
    setCategoryMenu(convertObject);
  }, [category]);

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
          <div className='menu' key={index}>
            {data.icon}
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
