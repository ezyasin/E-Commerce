import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RootLayouts({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default RootLayouts