import React from 'react';
import Header from './Header';
import Footer from './Footer';


const layout = ({children}) => {
  return (
    <>
    <main className='min-h-scren bg-DarkBackground'>
      <Header/>
        <section>{children}</section>
      <Footer/>
    </main>

    </>
  )
}

export default layout