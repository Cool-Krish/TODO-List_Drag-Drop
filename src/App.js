// import logo from './logo.svg';
import './App.css';
import { useEffect, useContext, useState} from 'react'
import CreateTask from './Components/CreateTask';
import ListTask from './Components/ListTask';
import  { Toaster } from 'react-hot-toast';
import myContextAPI from './ContextAPI/ContextAPI';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import NavBar from './Components/Nav-Bar/NavBar';
import Authentication from './Components/Authentication/Authentication';

function App() {
  
  // console.log(tasks)
  const {tasks, setTasks} = useContext(myContextAPI)
  const [login, setLogin] = useState(false)
 
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("tasks"))
    if(data){
    setTasks(data)}
 },[])
//  console.log(tasks)
  return (
    <DndProvider backend={HTML5Backend}>
    <Toaster/>
    <NavBar login={login} setLogin={setLogin} />
    
    {login ?
    (<div className="App">
      <h1>To Do App</h1>
      <CreateTask  />
      <ListTask />
    </div>) : <Authentication setLogin = {setLogin} />
    }
    </DndProvider>
  );
}

export default App;
