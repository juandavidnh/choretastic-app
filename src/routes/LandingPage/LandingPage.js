import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import LandingBodySection from '../../components/LandingBodySections/LandingBodySection'
import './LandingPage.css'
import manWashingDishes from '../../media/photo-of-a-man-washing-dish-plates-3771047.jpg'
import womanDoingLaundry from '../../media/woman-wearing-white-towel-while-washing-clothes-2180947.jpg'
import manCleaningTable from '../../media/photo-of-man-cleaning-table-3890170.jpg'


class LandingPage extends Component {


    render() {
        const bodyContent = [
            {
                leftSide: <img src={manWashingDishes} alt="man-washing-dishes"/>,
                rightSide: <h3>Earn points for each completed chore.</h3>,
            },
            {
                leftSide: <h3>Get to the first place.</h3>,
                rightSide: <img src={womanDoingLaundry} alt="woman-doing-laundry"/>,
            },
            {
                leftSide: <img src={manCleaningTable} alt="man-cleaning-table"/>,
                rightSide: <h3>Earn a prize at the end of each week.</h3>,  
            }
        ]

        return(
            
               
                <main>
                    <Header headerContent="Gamifying Household Chores" />
                    <LandingBodySection leftSection={bodyContent[0].leftSide} rightSection={bodyContent[0].rightSide}/>
                    <LandingBodySection leftSection={bodyContent[1].leftSide} rightSection={bodyContent[1].rightSide}/>
                    <LandingBodySection leftSection={bodyContent[2].leftSide} rightSection={bodyContent[2].rightSide}/>              
                </main>
          
        )
    }
}

export default LandingPage