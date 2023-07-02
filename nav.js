import React, {Component} from 'react'

export default class Nav extends Component {
    //render method returns the JSX for the component
    render() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}