import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TypingText from '@/components/TypingText';
import { MainButton } from '@/styles/components/button/button.style';

export default function Main() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  const renderHomeBtn = () => {
    if (isTypingComplete) return <MainButton onClick={goHome}>Go Record</MainButton>;
    return null;
  };
  return (
    <section className='first-page'>
      <TypingText text='Records for Your Programming!' setIsTypingComplete={setIsTypingComplete} />
      {renderHomeBtn()}
    </section>
  );
}
