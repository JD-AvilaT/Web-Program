import { Header, Tasks, Filters, Footer } from './components/index.js';
import './App.css';
import { TaskContextProvider } from './context/taskContextProvider.jsx';

function App() {
  return (
    <main>
      <TaskContextProvider>
        <Header/>
        <Filters/>
        <Tasks/>
        <Footer/>
      </TaskContextProvider>
    </main>
  );
}

export default App;