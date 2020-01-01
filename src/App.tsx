import React from 'react';
import {Navbar} from './components/navbar/navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TodosPage} from "./pages/todoPage";
import {AboutPage} from "./pages/aboutPage";


const App: React.FC = () => {


    return (
        <BrowserRouter>

            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route component={AboutPage} path='/' exact/>
                    <Route component={TodosPage} path='/todo' exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
