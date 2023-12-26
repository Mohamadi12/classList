import './App.css';
import ListClient from './component/affichage/ListClient';
import AjoutClient from './component/ajout/AjoutClient';
import Dashboard from './component/dashboard/Dashboard';
import HomePage from './component/home/HomePage';
import Update from './component/update/Update';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ajoutClient' element={<AjoutClient/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/affichageClient' element={<ListClient/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
