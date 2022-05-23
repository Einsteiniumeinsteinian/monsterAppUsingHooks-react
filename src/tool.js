import { Component } from 'react'
import Cardlist from './components/card-list/card-list.component'
// import logo from './logo.svg';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentMonsters: [],
      allMonsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) =>
        this.setState(
          () => {
            return { currentMonsters: monsters, allMonsters: monsters }
          }
        ), () => {
          console.log(this.state)
        }
      )
      .catch((error) => console.log(error))
  }

  onsearch(event) {
    console.log('hit', this.state.allMonsters)
    // const {allMonsters} = this.state
    // console.log(allMonsters)
      // const searchString = event.target.value.toLowerCase()
      // const filteredMonsters = allMonsters.filter(
      //   (monster) => monster.name.toLowerCase().indexOf(searchString) !== -1,
      // )
      // this.setState(() => {
      //   return { currentMonsters: filteredMonsters }
      // })
  }

  render() {
    const {currentMonsters} = this.state
    const {onsearch} = this
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={onsearch} />
          <Cardlist monsters={currentMonsters} />
        </header>
      </div>
    )
  }
}

export default App
