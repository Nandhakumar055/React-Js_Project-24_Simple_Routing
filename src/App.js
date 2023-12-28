import {Component} from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="card-container">
          <BrowserRouter>
            <Header />
            <div className="inside-main-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App
