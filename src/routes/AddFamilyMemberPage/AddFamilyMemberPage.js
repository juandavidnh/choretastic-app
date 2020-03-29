import React, { Component } from 'react'
import AddFamilyMemberForm from '../../components/AddFamilyMemberForm/AddFamilyMemberForm'
import './AddFamilyMemberPage.css'

class AddFamilyMemberPage extends Component {
    static defaultProps = {
        addFamilyMemberFunction: () => {}
    }

    render() {

        return(
            <main>
                <section className="main-section-w">
                    <h2>Add Family Member</h2>
                    <AddFamilyMemberForm 
                        addFamilyMemberFunction={this.props.addFamilyMemberFunction} 
                    />
                </section>
            </main>
        )
    }
}

export default AddFamilyMemberPage