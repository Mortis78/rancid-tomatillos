// import React, {Component} from 'react'
// import movieData from './FakeData'
// import Movies from './components/Movies/Movies';
// import Card from './components/Card/Card';
// import './App.css';

class App extends Component () {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  addMovie = (newMovie) => {
    this.setState({ movies: [...this.state.movies, newMovie] })
  }

  render() {
    return (
      <main className="App">
        <Header>
          {/* <Form viewMovie={}></Form> */}
        </Header>
        <div addMovie={this.addMovie}></div>
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}


export default App;
