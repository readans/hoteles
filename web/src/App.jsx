import { Route } from 'wouter'
import { Switch } from 'wouter'
import Home from './pages/Home'
import HotelDetail from './pages/HotelDetail'
import Navigation from './components/Navigation'
import Main from './layouts/Main'

function App() {


  return (
    <>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

      <Switch>
        <Route path="/">
          <Main>
            <Home />
          </Main>
        </Route>
        <Route path="/detail/:id">
          <Main>
            <HotelDetail />
          </Main>
        </Route>
      </Switch>
    </>

  )
}

export default App
