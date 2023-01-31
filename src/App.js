import React from 'react'
import Home from './pages/Home'
import User from './pages/User'
import Contact from './pages/Contact'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import {createStore,combineReducers} from "redux"
import { Provider } from 'react-redux'
import userReducer from './store/reduce/user'

const rootReducer = combineReducers({
    data:userReducer,
})

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
<BrowserRouter>
<NavBar/>
<Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/user' element={<User/>}/>
<Route exact path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>
</Provider>
  )
}

export default App;

