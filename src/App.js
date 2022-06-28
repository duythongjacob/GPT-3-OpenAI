import React from 'react'
import { Brand, CTA, Navbar,  } from './components'
import {Footer, Blog, Possibility, WhatGPT3, Header, Features} from './containers'
import './App.css'
function App() {
  return (
    <>
  
      <div className="App">
        <div className="gradient__bg">
          <Navbar></Navbar>
          <Header></Header>

        </div>  
        <Brand></Brand>
        <WhatGPT3></WhatGPT3>
        <Features></Features>
        <Possibility></Possibility>
        <CTA></CTA>
        <Blog></Blog>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App