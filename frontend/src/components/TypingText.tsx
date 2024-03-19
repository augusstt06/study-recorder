import { useEffect, useState } from 'react';

import { BlinkCursor, Typing } from '@/styles/components/typingText/typingText.style.ts';
import { TypingTextProps } from '@/types/components';

export default function TypingText(props: TypingTextProps) {
  const { text, setIsTypingComplete } = props;
  const [mainText, setMainText] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setIsTypingComplete(false);
    const typingText = text ? text : '';
    const interval = setInterval(() => {
      setMainText((mainText) => {
        let updatedText = mainText;
        updatedText = mainText + typingText[count];
        return updatedText;
      });
      setCount(count + 1);
    }, 170);
    if (count === typingText.length) {
      clearInterval(interval);
      setIsTypingComplete(true);
    }

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Typing>
      {mainText}
      <BlinkCursor />
    </Typing>
  );
}
