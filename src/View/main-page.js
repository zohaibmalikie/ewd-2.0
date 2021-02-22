import React from 'react'
import Header from '../Compoments/header'
import Footer from '../Compoments/footer'
import Card from '../Compoments/cards'
import Portfolio from '../Compoments/portfolio'
import Cardstwo from '../Compoments/cardstwo'
import CardsThree from '../Compoments/cardsthree'
function mainPage() {
    return (
        <div>
        <Header/>
       <Card/>
       {/* <Portfolio/>  */}
       <Footer/>
        </div>
    )
}

export default mainPage;