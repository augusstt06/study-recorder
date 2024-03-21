import '@/styles/pages/Main.css';

import { useState } from 'react';

import TypingText from '@/components/TypingText';
import { StyledMainButton } from '@/styles/components/button/button.style';
import { MainPageProps } from '@/types/pages';

export default function Main(props: MainPageProps) {
  const { movePage } = props;
  const goHome = () => {
    movePage('/home');
  };
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  const renderHomeBtn = () => {
    if (isTypingComplete) return <StyledMainButton onClick={goHome}>Go Record</StyledMainButton>;
    return null;
  };
  return (
    <section className='first-page'>
      <TypingText text='Records for Your Programming!' setIsTypingComplete={setIsTypingComplete} />
      {renderHomeBtn()}
    </section>
  );
}
