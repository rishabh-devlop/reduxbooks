import React from 'react'
import '../styles/_global.scss'
import Navbar from './Layout/Navbar'
import Home from './pages/Home'
import {Provider} from 'react-redux'
import store from './State'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'


const App = () => {
  return (
    <Provider store={store}>
    <Router>
        <Navbar />
        <div className="container">
          <div className="py-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
          </Switch>
          </div>
        </div>
    </Router>
    </Provider>
  )
}

export default App
