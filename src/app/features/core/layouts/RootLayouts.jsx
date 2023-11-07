import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RootLayouts({children}){
  return (
    <main className='flex-1 items-center flex-col h-screen justify-between'>
      <div className="">
        <Header />
        </div>
        <div className='h-4/5'>
        {children}
        </div>
        <div>
        <Footer />
        </div>
    </main>
  )
}

export default RootLayouts