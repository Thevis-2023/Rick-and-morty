import CharacterList from './components/CharacterList'

import './App.css'

function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src="./src/assets/logo.jpg" style={{width:"50px"}}/>
          </span>
        </div>
      </nav>
      <div className='bg-dark text-white'>
        <h1 className='text-center display-1 py-5 fw-semibold'>Rick and Morty</h1>
        <CharacterList />
      </div>
    </>
  )
}

export default App
