import React from 'react'
import RegiterProvider from '@/app/UI/Register/RegiterProvider';
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <section className=' w-full min-h-screen grid grid-flow-row  grid-rows-[100px_1fr] place-items-center p-6 '
        >
            <h1 className='font-bold text-heading_color text-3xl capitalize max-h-[100px]'>regiter form</h1>
          <RegiterProvider>
            {children}
          </RegiterProvider>
        </section>

    );
  }