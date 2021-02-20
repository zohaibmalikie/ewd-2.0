import React from 'react'
import Header from '../Compoments/header'
import Footer from '../Compoments/footer'
import Card from '../Compoments/cards'
import Portfolio from '../Compoments/portfolio'
function mainPage() {
    return (
        <div>
        <Header/>
       <Card/>
       <Portfolio/> 
       <Footer/>
        </div>
    )
}

export default mainPage;