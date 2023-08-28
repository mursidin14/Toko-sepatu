import "assets/scss/bootstrap.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "pages/homePage";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" Component={HomePage} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
