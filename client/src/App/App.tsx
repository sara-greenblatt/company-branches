import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StoreList } from '../_pages';
import './App.scss';

function App() {
    return (
        <div className="jumbotron main">
            <div className="container">
                <h3 className='text-danger text-center main-title'>
                    Company Branches
                </h3>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<StoreList />} />
                        <Route path="/list" element={<StoreList />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export { App };