import '@/styles/components/sidebar/Sidebar.css';
import { IoLogoJavascript } from 'react-icons/io5';
import { MdSaveAs } from 'react-icons/md';
import { RiReactjsLine } from 'react-icons/ri';

export default function Sidebar() {
  // FIXME: 추후, 리스트를 props로 받아오기
  const shortcutMenu = [
    { icon: <MdSaveAs style={{ width: '25px', height: '25px' }} />, title: 'Current Save' },
  ];
  const categoryMenu = [
    { icon: <IoLogoJavascript style={{ width: '25px', height: '25px' }} />, title: 'Javascript' },
    { icon: <RiReactjsLine style={{ width: '25px', height: '25px' }} />, title: 'React' },
  ];
  return (
    <div className='sidebar'>
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
    </div>
  );
}
