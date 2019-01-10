import React from 'react';
import './InfoPage.css';

export default class InfoPage extends React.Component {
    render() {
        return (
            <div>

                <div className="pos-abs">
                    <h1 className="text-cente">REDUX SPA APP</h1>
                    <ul>
                        <li>Redux,Redux, Mongo, Node.js/Expres.js</li>
                        <li>Redux</li>
                        <li>MongoDB</li>
                        <li>Node.js/Expres.js</li>
                        <li>Bootstrap / ReactStrap</li>
                        <li>Material UI</li>
                    </ul>
                    <h4>To run Mocha/Chai backend unit test in root run: mocha </h4>
                    <h4>To run Enzyme/Jest unit test in root run: npm test --watch</h4>
                </div>
            </div>
        )
    }
}
