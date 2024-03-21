import { FaGoogle } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

export function matchingIcon(category: string) {
  switch (category.toUpperCase()) {
    case 'GOOGLE':
      return {
        icon: <FaGoogle style={{ width: '25px', height: '25px' }} />,
        title: category,
      };
    case 'REACT':
      return { icon: <RiReactjsLine style={{ width: '25px', height: '25px' }} />, title: category };
    case 'JS' || 'JAVASCRIPT':
      return {
        icon: <IoLogoJavascript style={{ width: '25px', height: '25px' }} />,
        title: category,
      };
    case 'TS' || 'TYPESCRIPT':
      return {
        icon: <SiTypescript style={{ width: '25px', height: '25px' }} />,
        title: category,
      };
    default:
      return {
        icon: <></>,
        title: category.slice(1),
      };
  }
}
