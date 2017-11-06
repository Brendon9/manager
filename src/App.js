import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import history from 'utils/history'

import Nav from 'views/components/Nav'
import Header from 'views/components/Header'

// import requireAuth from 'views/containers/RequireAuth'

import Landing from 'views/containers/Landing'

import Login from 'views/containers/Login'
import Register from 'views/containers/Login/Register'
import Forgot from 'views/containers/Login/Forgot'
import Logout from 'views/containers/Login/Logout'

import System from 'views/containers/System'
import Survivor from 'views/containers/Survivor'
import Survivors from 'views/containers/Survivors'
import SurvivorsCreate from 'views/containers/Survivors/SurvivorsCreate'
import Settlements from 'views/containers/Settlements'
import SettlementsCreate from 'views/containers/Settlements/Create'
import Storage from 'views/containers/Storage'
import Resources from 'views/containers/Storage/Resources'
import Gear from 'views/containers/Storage/Gear'

import Log from 'views/containers/Log'
import Settlement from 'views/containers/Settlement'
import More from 'views/containers/More'
import Aya from 'views/containers/Aya'
import NotFound from 'views/components/NotFound'

import configureStore from 'core/store'
const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router history={history}>
          <Switch>
            {/* Unauth public links */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/forgot' component={Forgot} />
            <Route exact path='/logout' component={Logout} />

            {/* Dev Routes */}
            <Route title='Aya' exact path='/aya' component={Aya} />

            {/* App Routes */}
            <Route exact path='/' component={Landing} />

            <Route
              exact path='/settlements'
              component={Settlements}
              noHeader
              back
            />

            <Route
              exact path='/settlements/create'
              component={SettlementsCreate}
              noHeader
              back
            />
            <Route path='/more' title='More' component={More} />
            <Route
              path='/settings'
              title='System'
              component={System}
            />
            <Route
              path='/settlements/:oid'
              title='Settlement'
              component={Settlement}
            />
            <Route
              path='/settlements/:oid/log'
              title='Campaign Log'
              component={Log}
            />
            <Route
              path='/settlements/:oid/survivors'
              title='Survivors'
              noHeader
              component={Survivors}
            />
            <Route
              path='/settlements/:oid/survivors/create'
              title='Survivors'
              noHeader
              back
              component={SurvivorsCreate}
            />

            <Route
              path='/settlements/:oid/survivors/:survivorId'
              title='Survivor'
              noHeader
              back
              component={Survivor}
            />
            <Route
              path='/settlements/:oid/storage'
              title='Storage'
              component={Storage}
            />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
