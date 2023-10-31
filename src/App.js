import './App.css';
import MainDash from './components/MainDash/MainDash';
import SideDash from './components/SideDash/SideDash';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar/>
        <MainDash/>
        <SideDash/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
