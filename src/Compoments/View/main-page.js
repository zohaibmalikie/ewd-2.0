import React from 'react'
import Header from '../cards/Card'
import Header from './header'
import Footer from './Compoments/footer'
import Card from './Compoments/cards'
import Portfolio from './Compoments/portfolio'
function mainPage() {
    return (
        <div>
        <Header/>
       <Card/>
       <Footer/>
       <Portfolio/> 
        </div>
    )
}

export default mainPage;