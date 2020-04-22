import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import TasksNav from '../../components/TasksNav/TasksNav'
import TokenService from '../../services/token-service'
import './LandingPage.css'
import manWashingDishes from '../../media/photo-of-a-man-washing-dish-plates-3771047.jpg'
import womanDoingLaundry from '../../media/woman-wearing-white-towel-while-washing-clothes-2180947.jpg'
import manCleaningTable from '../../media/photo-of-man-cleaning-table-3890170.jpg'


class LandingPage extends Component {
   

    render() {


        return(
            
               
                <main>
                    {/*only show tasksNav when the user is logged in*/}
                    {TokenService.hasAuthToken() && <TasksNav />}
                    <Header />
                    <section className="main-section rose">
                        <div className="image bodySectionLeft left flex-35">
                            <img src={manWashingDishes} alt="man-washing-dishes"/>
                        </div>
                        <div className="bodySectionRight flex-65">
                            <h3>Earn points for each completed chore.</h3>
                        </div>
                    </section>
                    <section className="main-section white">
                        <div className="bodySectionLeft flex-65">
                            <h3>Get to the first place.</h3>
                        </div>
                        <div className="image bodySectionRight right flex-35">
                            <img src={womanDoingLaundry} alt="woman-doing-laundry"/>
                        </div>
                    </section>
                    <section className="main-section rose ">
                        <div className="image bodySectionLeft left flex-35">
                            <img src={manCleaningTable} alt="man-cleaning-table"/>
                        </div>
                        <div className="bodySectionRight flex-65">
                            <h3>Earn a prize at the end of each week.</h3>
                        </div>
                    </section>
                </main>
          
        )
    }
}

export default LandingPage