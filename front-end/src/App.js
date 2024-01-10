import './App.css';
import Navbar from "./components/Navbar";
import AddStudent from "./AddStudent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GetStudents from "./GetStudents";

function App() {

    return (
            <div className="App">
                <Navbar />
                <header className="App-header">
                    <AddStudent/>
                    <GetStudents/>
                </header>
            </div>
    );
}

export default App;
