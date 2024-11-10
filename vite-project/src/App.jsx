
import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_INITIAL } from './actionsType'
import ListItem from './components/ListItem/ListItem'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Item from './components/Item/Item'
import  Card  from './components/Card/Card'
import { connect } from 'react-redux'
import { addInitialState} from './actions'
import Input from './components/Input/Input'
import Edit from './components/Edit/Edit'

const API_DATA = 'https://lubaparahonya.github.io/api-free/api.json'


function App(props) {
  const dispatch = useDispatch()
  const getApiData = async () => {
  const result = await fetch(API_DATA)
  .then(result => result.json())
  props.addInitialState(result)
  // const arr = []
  // result.map(el => arr.push(el.catecories))
  // console.log('result', arr)
  }

  useEffect(()=>{
    getApiData()
  }, [dispatch])

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ListItem />}/>
    <Route path='/products/:id' element={<Card />}/>
    <Route path='/create' element={<Input />}/>
    <Route path='/create/:id' element={<Edit />}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default connect(null, { addInitialState})(App)
