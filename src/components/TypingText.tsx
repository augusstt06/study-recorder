import '@/styles/components/TypingText.css';

import { useEffect, useState } from 'react';

import { TypingTextProps } from '@/types/components';

export default function TypingText(props: TypingTextProps) {
  const { text } = props;
  const [mainText, setMainText] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const typingText = text ? text : '';
    const interval = setInterval(() => {
      setMainText((mainText) => {
        let updatedText = mainText;
        updatedText = mainText + typingText[count];
        return updatedText;
      });
      setCount(count + 1);
    }, 200);
    count === typingText.length && clearInterval(interval);
    return () => clearInterval(interval);
  });
  return (
    <p className='text'>
      {mainText}
      <span className='blink' />
    </p>
  );
}
