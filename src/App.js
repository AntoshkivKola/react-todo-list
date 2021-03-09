import TodoList from 'Pages/TodoList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
     <Switch>
       <Route path='/' component={TodoList}/>
     </Switch>
    </BrowserRouter>
  )
}

export default App
