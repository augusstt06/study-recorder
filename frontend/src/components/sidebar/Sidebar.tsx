import { useEffect, useState } from 'react';
import { categoryListStore, categoryStore } from '@/store/store';

import { StyledSidebar } from '@/styles/components/sidebar/sidebar.style';

import { matchingIcon } from '@/utils/matchingIcon';

export default function Sidebar() {
  const { setCategory } = categoryStore();
  const [categoryMenu, setCategoryMenu] = useState<{ icon: JSX.Element; title: string }[]>([]);
  const { categoryList } = categoryListStore();

  useEffect(() => {
    const convertObject = categoryList.map((data) => matchingIcon(data.slice(1)));
    setCategoryMenu(convertObject);
  }, [categoryList]);

  return (
    <aside>
      <StyledSidebar>
        <input type='text' placeholder='category' />
        <div className='menu-title'>
          <p>category</p>
        </div>
        <section className='menu-wrapper'>
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
        </section>
      </StyledSidebar>
    </aside>
  );
}
