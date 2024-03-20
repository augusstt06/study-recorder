import { Dispatch, SetStateAction } from 'react';

export type TypingTextProps = {
  text: string;
  setIsTypingComplete: Dispatch<SetStateAction<boolean>>;
};

export type SidebarProps = {
  categoryList: string[];
};
