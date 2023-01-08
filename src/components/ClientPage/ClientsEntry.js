import React, { useContext, useState } from "react";
import "./Client.css";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { UserContext } from "../../App";

export default function ClientsEntry() {
  const [sort, setSort] = useState(false);
  
  const { data, selectedCompany, setSelectedCompany } = useContext(UserContext);

  const handlechange = () => {
    setSort(!sort);
  };

  return (
    <>
      {console.log(data)}
      <div className="client-heading">
        <div className="innerHeading">
          <div className="title">
            <p className="t-name">Client</p>
          </div>
          <div className="sort-btn" onClick={handlechange}>
            {sort ? <FaSortAmountDownAlt /> : <FaSortAmountUpAlt />}
          </div>
          <div className="c-time">
            <p className="d-name">Creation Time</p>
          </div>
        </div>
        <div className="addBtn">
          <FaPlusSquare />
        </div>
      </div>
      <div className="search-container">
        <div className="search">
          <input type="text" placeholder="company,Entry, User, Domain" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      <div>
        <select className="select-date">
          <option>August 2022</option>
          <option>october 2022</option>
          <option>December 2022</option>
          <option>April 2022</option>
          <option>January 2023</option>
        </select>
      </div>

      {data.map((company) => (
        <div
          key={company.id}
          className="companyData"
          onClick={() => setSelectedCompany(company)}
          style={{
            backgroundColor:
              company.id === selectedCompany.id ? "rgb(10, 2, 58)" : "white",
            color: company.id === selectedCompany.id ? "white" : ""
          }}
        >
          <div className="com-1">
            <div className="comp-name">
              <p>{company.title}</p>
            </div>
            <div className="comp-name">
              <p>{company.code}</p>
            </div>
          </div>
          <div className="com-1">
            <div className="comp-en">
              <p>{company.entities.length} Entry</p>
            </div>
            <div className="comp-en">
              <p>{company.user} User</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
