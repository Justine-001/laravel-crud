import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Createpost from './pages/Createpost';
import {Viewpost1, Viewpost} from './pages/Viewpost';
function App() {
  return (
    <Router>
      <div className='bg-light'>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Navbar scroll</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="/links" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Post 
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/Createpost">Create post</Link></li>
                      <li><Link className="dropdown-item" to="/Viewpost">View Post</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" to="/something">Something else here</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link disabled">Link</span>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Example Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Createpost" element={<Createpost/>} />
        <Route path="/Viewpost" element={<Viewpost1/>} />
        <Route path="/Viewpost" element={<Viewpost/>} />
      </Routes>
    </Router>
  );
}

export default App;
