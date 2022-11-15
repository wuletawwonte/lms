import { BrowserRouter as Router } from 'react-router-dom';
import './styles/reset.scss';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
