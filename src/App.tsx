import '@/styles/App.css';
import { useState } from 'react';

import Button from './components/button/Button';
import TypingText from './components/TypingText';

function App() {
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  const renderHomeBtn = () => {
    if (isTypingComplete) return <Button>Go Record</Button>;
    return <></>;
  };
  console.log(isTypingComplete);
  return (
    <section className='first-page'>
      <TypingText text='Records for Your Programming!' setIsTypingComplete={setIsTypingComplete} />
      {renderHomeBtn()}
    </section>
  );
}

export default App;
