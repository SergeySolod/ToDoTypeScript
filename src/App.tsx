import React from 'react';
import {Navbar} from './components/navbar/navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TodoPages} from "./pages/todoPage";
import {AboutPage} from "./pages/aboutPage";


const App: React.FC = () => {


    return (
        <BrowserRouter>

            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route component={TodoPages} path='/' exact/>
                    <Route component={AboutPage} path='/about' exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
