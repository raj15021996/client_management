import './Entities.css';
import React, { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa';
import { FaAngleDown} from 'react-icons/fa';
import {FaAngleUp} from 'react-icons/fa';
import UserTable from './UserTable';
export default function Entities() {
    const [active, setActive] = useState("");
    const [show, setShow] = useState(false);
    const [innerData,setInnerData]=useState(false);
    
    return (
        <>
            <div className='entities-containers'>
                <nav className='en-Nav'>
                    <ul>
                        <li className={` ${active === "first" ? "activeButton" : ""}`}
                            onClick={() => {
                                setActive("first");
                                setShow(true);
                            }}
                        > ENTITIES</li>
                        <li className={`${active === "second" ? "activeButton" : ""}`}
                            onClick={() => {
                                setActive("second");
                                setShow(false);
                            }}
                        > INVOICE CODES</li>
                        <li className={`${active === "third" ? "activeButton" : ""}`}
                            onClick={() => {
                                setActive("third");
                                setShow(false);
                            }}
                        > USERS</li>
                    </ul>
                </nav>

                {
                    show &&
                    <div className='main-content'>
                        <div className='table-container'>
                            <div>
                                <h3>3 Entities</h3>
                            </div>
                            <div className='addBtn'>
                                <FaPlusSquare />
                            </div>
                        </div>
                        <table>
                            <thead class="table_heading">
                                <th>Billing Location</th>
                                <th>Entity Name</th>
                                <th>Entity Code</th>
                                <th>MSLA valid through</th>
                                <th>External</th>
                            </thead>
                            <tbody>
                                <tr class="table_collection">
                                    <td>Riyadh,Kingdom of Saudi Arabia</td>
                                    <td>Lucas Films Private Limited</td>
                                    <td>LUCF01</td>
                                    <td>3 June 2022 - 5 June 2030</td>
                                    <td>External</td>
                                    <button className='angleBtn'
                                     onClick={()=>setInnerData(!innerData)}>
                                        {!innerData? <FaAngleDown/>:<FaAngleUp/>}
                                     </button>
                                </tr>
                                <td class="table_details" colSpan="6">
                                        <UserTable/>
                                     </td>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </>
    )
}
