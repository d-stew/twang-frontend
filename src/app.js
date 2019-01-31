import React from 'react' 
import { Route } from 'react-router-dom'

import { Home } from './components/home.component'
import AppDashboard from './components/app_dashboard.component.js'
import UserInsights from './components/user_insights.component'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/user-insights" component={UserInsights} />
      <Route exact path="/dashboard" component={AppDashboard} />
    </main>
  </div>
)

export default App
