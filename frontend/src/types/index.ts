// variables

import { ChangeEvent } from 'react';

export type ResponseDB = {
  title: string;
  url: string;
  description: string;
  category: string;
};

export type SaveDataResponse = {
  url: string;
  category: string;
  title: string;
  description: string;
};

export type InputListType = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}[];
