import React, { useContext, useState } from "react";
import "./ComDetails.css";
import { FaRegFilePdf } from "react-icons/fa";
import Entities from '../EntitiesDetails/Entities';
import { UserContext } from "../../App";
export default function CompanyDetails() {
  const { selectedCompany } = useContext(UserContext);
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <div className="head-container">
        <div className="sections">
          <div className="section-1">
            <div classname="main-heading">
              <FaRegFilePdf style={{ color: "red", fontSize: "2rem" }} />
              <span className="company-Name">{selectedCompany.title}</span>
            </div>
            <button className="editBtn">Edit</button>
          </div>
          <div className="section-2">
            <div className="company-detail">
              <div>
                <h3>Company Code</h3>
                <p>MHM</p>
              </div>
              <div>
                <h3>Company Logo</h3>
                <p>Unavailable</p>
              </div>
            </div>
            <div className="domainsName">
              <h3>Domains</h3>
              <div>
                {showAll
                  ? selectedCompany.domains.map((domain) => {
                      return <div id={domain}>{domain}</div>;
                    })
                  : selectedCompany.domains.slice(2).map((domain) => {
                      return <div id={domain}>{domain}</div>;
                    })}
              </div>
              {!showAll && (
                <p onClick={() => setShowAll(true)} classname="extend-domain">
                  +2 others
                </p>
              )}
            </div>
          </div>
        </div>
        <Entities />
      </div>
    </>
  );
}
