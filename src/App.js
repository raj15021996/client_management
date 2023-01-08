import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ClientsEntry from "./components/ClientPage/ClientsEntry";
import CompanyDetails from "./components/Company-Page/CompanyDetails";
import { createContext, useState } from "react";
import details from './components/Datas'
export const UserContext = createContext(null);

function App() {
  const [data, setData] = useState(details);
  const [selectedCompany, setSelectedCompany] = useState(details[0]);

  const value = {
    data,
    setData,
    selectedCompany,
    setSelectedCompany
  };

  return (
    <div className="App">
      <div className="profile">
        <div className="p-data">
          <button className="name-button">Hi Raj,</button>
        </div>
        <div className="dropdown">
          <img
            className="p-image"
            src="profile.png"
            alt="profile"
            style={{ height: "40px", width: "40px" }}
          />
          <div className="dropdown-content">
            <a href="/">Account</a>
            <a href="/">Log out</a>
          </div>
        </div>
      </div>
      <UserContext.Provider value={value}>
        <Navbar />
        <div className="client-content">
          <ClientsEntry />
        </div>
        <div>
          <CompanyDetails />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;


