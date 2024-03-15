import '@/styles/components/sidebar/Sidebar.css';
// import { MdDashboard } from 'react-icons/md';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine } from 'react-icons/ri';
import { TbReportSearch } from 'react-icons/tb';

export default function Sidebar() {
  const shortcutMenu = [
    { icon: <TbReportSearch style={{ width: '25px', height: '25px' }} />, title: 'Current Search' },
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
