import '@/styles/components/footer/footer.style.css';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { SiGitbook } from 'react-icons/si';

import { GIT, GITBOOK } from '@/constant';

export default function Footer() {
  const iconList = [
    {
      url: GIT,
      icon: <FaGithub style={{ width: '30px', height: '30px' }} />,
    },
    {
      url: GITBOOK,
      icon: <SiGitbook style={{ width: '30px', height: '30px' }} />,
    },
    {
      url: '/',
      icon: <BiLogoGmail style={{ width: '30px', height: '30px' }} />,
    },
  ];
  return (
    <div className='footer-icon'>
      {iconList.map((data, index) => (
        <div key={index} className='icon'>
          <a href={data.url}>{data.icon}</a>
        </div>
      ))}
    </div>
  );
}
