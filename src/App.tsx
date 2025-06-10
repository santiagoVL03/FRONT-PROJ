import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutGral from './layouts/LayoutGral'
import Login from './pages/Login'
import Feed from './pages/Feed'
import LayoutFeed from './layouts/LayoutFeed'
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element=
          {
            <LayoutGral>
              <Home />
            </LayoutGral>
          }
        />
        <Route path="/login" element=
          {
            <LayoutGral>
              <Login />
            </LayoutGral>
          }
        />
        <Route
          path="/feed"
          element={
            <LayoutFeed
              mainContent={<Feed />}
              sidebarContent={<Sidebar />}
            />
          }
        />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6">
          Welcome to Lvn
        </h1>
        <a
          href='/login'
          className="bg-neutral-800 hover:bg-neutral-900 text-white font-semibold px-6 py-3 rounded"
        >
          Go to Login
        </a>
      </div>
    </div>

  )
}

export default App
