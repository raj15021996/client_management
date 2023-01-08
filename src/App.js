import './App.css';
import Navbar from './components/Navbar/Navbar';
import ClientsEntry from './components/ClientPage/ClientsEntry';
import Profiles from './components/Company-Page/CompanyDetails';

function App() {

  return (
    <div className="App">
      <div className='profile'>
        <div className='p-data'>
          <button className='name-button'>Hi Raj,</button>
        </div>
        <div class="dropdown">
          <img className='p-image'
            src='profile.png' alt='profile'
            style={{ height: '40px', width: '40px' }}
          />
          <div class="dropdown-content">
            <a href="/">Account</a>
            <a href="/">Log out</a>
          </div>
        </div>

      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <ClientsEntry />
      </div>
      <div>
        <Profiles />
      </div>
    </div>
  );
}

export default App;
