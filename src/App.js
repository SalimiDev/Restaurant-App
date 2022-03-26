import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Style
import './App.css';
//Component
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
            </Router>
        </div>
    );
}

export default App;
