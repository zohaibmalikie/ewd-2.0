import React from 'react'
import Header from '../Compoments/header'
import Footer from '../Compoments/footer'
import Card from '../Compoments/cards'
import Org_Portfolio from '../Compoments/org_portfolio'
import Cardstwo from '../Compoments/cardstwo'
import CardsThree from '../Compoments/cardsthree'
function mainPage() {
    return (
        <div>
        <Header/>
       <Card/>
       <Org_Portfolio/>
       <Footer/>
        </div>
    )
}

export default mainPage;