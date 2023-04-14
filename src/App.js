import logo from './logo.svg';
import AdminPage from './components/adminPage';
import './App.css';
import UpdateUser from './components/updateUser';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FeedbackPage from './components/feedbackPage';
function App() {
  return (
    <div className="App">
      
      <>
                <Routes>
                  <Route path="/" Component={AdminPage}></Route>
                  <Route path='/update/:id' Component={UpdateUser}></Route>
                  <Route path="/feedback" Component={FeedbackPage}></Route>
                </Routes> 
     </>
     {/* <UpdateUser/> */}
    </div>
  );
}

export default App;
