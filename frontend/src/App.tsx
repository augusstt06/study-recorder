import '@/styles/app.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useRef } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Main from './pages/Main';

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const movePage = (url: string) => {
    if (url !== pathname) {
      pageRef.current?.classList.replace('loaded', 'unloaded');
      setTimeout(() => {
        navigate(url);
        pageRef.current?.classList.replace('unloaded', 'loaded');
      }, 400);
    }
  };

  return (
    <div ref={pageRef} className='loaded'>
      <Routes>
        <Route path='/' element={<Main movePage={movePage} />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default function AppRouter() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
