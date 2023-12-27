import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import './index.css';

const App=()=>{
  
  return(
    <>
    <div className="flex wrapper">
      <Sidebar/>
      <Main/>
    </div>
    
    </>
  )
}

export default App;