import React from 'react'
import './ComDetails.css'
import { FaRegFilePdf } from 'react-icons/fa';
import Entities from '../../EntitiesDetails/Entities';

export default function CompanyDetails() {
    return (
        <>
            <div className="head-container">
                <div className="sections">
                    <div className="section-1">
                        <div classname="main-heading">
                            <FaRegFilePdf style={{ color: 'red', fontSize: '2rem' }} />
                            <span className='company-Name'>Mahindra Motors Private Limited</span>
                        </div>
                        <button className='editBtn'>Edit</button>
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
                            <p>@mahindramotors.com</p>
                            <p>@mahindratech.com</p>
                            <p>@mahindravehicles.com</p>
                            <p classname="extend-domain">+2 others</p>
                        </div>
                    </div>
                </div>
            </div>
           <div>
           <Entities/>
           </div>
            
        </>
    )
}
