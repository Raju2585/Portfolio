import './App.css';
import { Provider } from 'react-redux';
import store from './components/store/store';
import { DrawerAppBar } from './components/DashBoard';
function App() {
  return (
    <Provider store={store}>
      <DrawerAppBar />
    </Provider>
  );
}

export default App;
