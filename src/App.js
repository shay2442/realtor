
import './App.css';
import ListingsContainer from './Components/ListingsContainer'
import Form from './Components/Form'
import {useState} from 'react'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import {Route, Switch} from 'react-router-dom'

function App() {

const [search, setSearch] = useState('')

function handleSearch(newSearch) {
  setSearch(newSearch)
}

  return (
    <div className="App">
      <header className="App-header"> 
      <NavBar setSearch={setSearch} />
      <br>
      </br>
      <Search onSearch={handleSearch}/>
      <Switch>
        <Route exact path='/listings/new'>
            <Form/> 
          </Route>
      <Route exact path='/listings'>
        <ListingsContainer search={search} /> 
      </Route>
      <Route exact path='/listings/favorites'>
        <ListingsContainer favorites={true} search={search} />
      </Route>
    </Switch>
        
      
      </header>
    </div>
  );
}

export default App;
