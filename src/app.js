import React from 'react' 
import { Route } from 'react-router-dom'

import { Home } from './components/home.component'
import AnalyticsDashboard from './components/analytics_dashboard.component.js'
import UserInsights from './components/user_insights.component'
import MainNav from './components/shared/main_nav.component'

const App = () => (
  <div>
    <MainNav/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/user-insights" component={UserInsights} />
      <Route exact path="/analytics" component={AnalyticsDashboard} />
    </main>
  </div>
)

export default App
