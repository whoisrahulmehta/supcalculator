import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";

function App() {
  const [loading, setLaoding] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>setLaoding(false),3000)
    return ()=> clearTimeout(timer);
  },[]); 

  return (
    <HashRouter>
     {
      loading ? <Loading /> :  (
        <div className="App">
          <Home />
      </div>
      )
     }
    </HashRouter>
  );
}

export default App;
