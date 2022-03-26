import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Style
import './App.css';
//Component
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
