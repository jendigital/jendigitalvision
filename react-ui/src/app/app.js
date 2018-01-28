import React, { Component } from 'react'
import { Route } from 'react-router'

import Presentation from './pages/resume/presentation'
import Actuality from './pages/actuality'
import Ambitions from './pages/resume/ambitions'
import Contact from './pages/contact'
import Missions from './pages/resume/ambitions'
import References from './pages/resume/references'
import Company from './pages/company'
import Technology from './pages/resume/tech'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <Presentation store={this.props.store} history={this.props.history} />} />
                <Route exact path='/actuality' render={() => <Actuality store={this.props.store} history={this.props.history} />} />
                <Route exact path='/ambitions' render={() => <Ambitions store={this.props.store} history={this.props.history} />} />
                <Route exact path='/contact' render={() => <Contact store={this.props.store} history={this.props.history} />} />
                <Route exact path='/missions' render={() => <Missions store={this.props.store} history={this.props.history} />} />
                <Route exact path='/references' render={() => <References store={this.props.store} history={this.props.history} />} />
                <Route exact path='/company' render={() => <Company store={this.props.store} history={this.props.history} />} />
                <Route exact path='/technology' render={() => <Technology store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
