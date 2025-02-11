import './App.css';
import { Provider } from 'react-redux';
import store from './components/store/store';
import { DashBoard } from './components/DashBoard';
import StarsCanvas from './components/canvas/Stars';

function App() {
  return (
    <Provider store={store}>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <div 
          style={{
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            zIndex: -1
          }}
        >
          <StarsCanvas />
        </div>
        <DashBoard/>
      </div>
    </Provider>
  );
}

export default App;
