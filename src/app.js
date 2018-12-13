import React from 'react' 
import { Route } from 'react-router-dom'

import { Home } from './components/home.component'
import TwitterDashboard from './components/twitter_dashboard.component.js'
import MainNav from './components/shared/main_nav.component'

const App = () => (
  <div>
    <MainNav/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/sentiment-analysis" component={TwitterDashboard} />
    </main>
  </div>
)

export default App
