import './App.css';
import Login from './pages/Login/Login.jsx';
import Sidebar from './components/Sidebar';
import { Container } from './styled-components/Container';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Orders from './pages/Orders/Orders';
import Users from './pages/Users/Users';

function App() {
  return (
    <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/app" element={<Sidebar />} >
          <Route exact path="/app/orders" element={<Orders />} ></Route>
          <Route exact path="/app/users" element={<Users />} ></Route>
        </Route>
        <Route path="*" element={() => <h1>404: Not found</h1>} />
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
