
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation_bar from './Components/Navbar';
import routes from './Routes/Routes';


function App() {
  return (
    <div className='container'>
      <header><Navigation_bar /></header>
      {routes}
      <body></body>
      
    </div>
  );
}

export default App;
