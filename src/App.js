import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Style
import './App.css';
//Component
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/menu' exact component={Menu} />
                    <Route path='/about' exact component={About} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
