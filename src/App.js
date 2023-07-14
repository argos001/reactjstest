import logo from './logo.svg';
import './App.css';
import HelloComponent from "./components/HelloComponent";
import {useState} from "react";

function App() {

    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <h1>asdas</h1>
            <button onClick={()=>setShow(show => !show)}>
                {show? 'Hide':'Show'}
            </button>
            {show && <HelloComponent/>}
        </div>
    );
}

export default App;
