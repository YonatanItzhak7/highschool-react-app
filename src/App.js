import './App.css';
import Home from './Home.component';
import Student from './Student.component';
import Students from './Students.component';
import StudentsTable from './Student-Table';
function App() {
  return (
    <div>
      <Home name="Yonatan"/>
      <Student firstName="Yonatan" lastName="Itzhak" date={new Date("09/29/1997").getFullYear()} pic="stickman1.jpg"/>
      <Students/>
      <StudentsTable/>
    </div>

  );
}

export default App;
