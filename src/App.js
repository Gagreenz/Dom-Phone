import './styles/main.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar} from './components';
import LoginForm from './components/Forms/LoginForm';
import { RegisterForm } from './components/Forms';

function App() {
  return (
    <div className="container-lg">
      <header>
        <NavBar/>
      </header>
      <section>
        <div className="fixed-overlay">
          <div className="modal-window">
            <div className="modal-container">
                <div className="">
                  {/* <LoginForm/> */}
                  <RegisterForm/>
                </div>
              </div>
          </div>
        </div>
      </section>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
