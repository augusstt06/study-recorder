import { FaGoogle } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine } from 'react-icons/ri';

export function matchingIcon(category: string) {
  switch (category) {
    case '#google':
      return {
        icon: <FaGoogle style={{ width: '25px', height: '25px' }} />,
        title: 'Google',
      };
    case '#react':
      return { icon: <RiReactjsLine style={{ width: '25px', height: '25px' }} />, title: 'React' };
    case '#js':
      return {
        icon: <IoLogoJavascript style={{ width: '25px', height: '25px' }} />,
        title: 'Javascript',
      };
    default:
      return {
        icon: <></>,
        title: category.slice(1),
      };
  }
}
