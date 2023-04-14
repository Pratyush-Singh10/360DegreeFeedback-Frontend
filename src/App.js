import logo from './logo.svg';
<<<<<<< HEAD
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
=======
import FeedbackPage from './components/feedbackQuestions/feedbackPage';
import './App.css';
import EmployeeList from './components/AdminPages/EmployeeList';

function App() {
  return (
    <div className="App">
      <FeedbackPage></FeedbackPage>
      {/* <EmployeeList></EmployeeList> */}
>>>>>>> 1dc14c80bfa890a4090da1b24f4de7a849f61013
    </div>
  );
}

export default App;
