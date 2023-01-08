import "./Entities.css";
import React, { useState, useContext } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import UserTable from "./UserData";
import { UserContext } from "../../App";

export default function Entities() {
    const { selectedCompany } = useContext(UserContext);

    const [active, setActive] = useState("first");
    const [show, setShow] = useState(true);
    const [innerData, setInnerData] = useState(true);
    const [entity, setEntity] = useState(selectedCompany.entities[0]);

    const handleEntity = (ent) => {
        setInnerData(!innerData);
        setEntity(ent);
    };

    return (
        <>
            <div className="entities-containers">
                <nav className="en-Nav">
                    <ul>
                        <li
                            className={` ${active === "first" ? "activeButton" : ""}`}
                            onClick={() => {
                                setActive("first");
                                setShow(true);
                            }}
                        >
                            {" "}
                            ENTITIES
                        </li>
                        <li
                            className={`${active === "second" ? "activeButton" : ""}`}
                            onClick={() => {
                                setActive("second");
                                setShow(false);
                            }}
                        >
                            {" "}
                            INVOICE CODES
                        </li>
                        <li
                            className={`${active === "third" ? "activeButton" : ""}`}
                            onClick={() => {
                                setActive("third");
                                setShow(false);
                            }}
                        >
                            {" "}
                            USERS
                        </li>
                    </ul>
                </nav>

                {show && (
                    <div className="main-content">
                        <div className="table-container">
                            <div>
                                <h3>3 Entities</h3>
                            </div>
                            <div className="addBtn">
                                <FaPlusSquare />
                            </div>
                        </div>
                        <table>
                            <thead className="table_heading">
                                <th>Billing Location</th>
                                <th>Entity Name</th>
                                <th>Entity Code</th>
                                <th>MSLA valid through</th>
                                <th>External</th>
                            </thead>
                            <tbody>
                                {selectedCompany.entities.map((ent) => {
                                    return (
                                        <>
                                            <tr className="table-content">
                                                <td>{ent.location}</td>
                                                <td>{ent.name}</td>
                                                <td>{ent.code}</td>
                                                <td>{ent.valid}</td>
                                                <td>External</td>
                                                <button
                                                    className="angleBtn"
                                                    onClick={() => handleEntity(ent)}
                                                >
                                                    {entity.id === ent.id && innerData ? (
                                                        <FaAngleDown />
                                                    ) : (
                                                        <FaAngleUp />
                                                    )}
                                                </button>
                                            </tr>
                                            {entity.id === ent.id && innerData ? (
                                                <td class="table_details" colSpan="6">
                                                    {innerData && <UserTable entity={entity} />}
                                                </td>) : ''}
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}
