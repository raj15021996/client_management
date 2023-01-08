import React from 'react'
import './Entities.css'
import { FaEye } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
export default function UserTable() {
    return (
        <>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p className='contentHeading'>Address</p>
                                    <p>Line1</p>
                                    <p>Line2</p>
                                    <p>City</p>
                                    <p>Country</p>
                                    <p>ZIP Code</p>
                                </td>
                                <td>
                                <p className='contentHeading'>Company Registration Number</p>
                                    <p>UICE8F2T749WEY</p>
                                    <br />
                                    <p className='contentHeading'>Company Registration Validity</p>
                                    <p>2 June 2025</p>
                                </td>
                                <td>
                                <p className='contentHeading'>TAX Registration Number</p>
                                    <p>JHGJH89KU0873KHH</p>
                                    <br />
                                    <p className='contentHeading'>TRN Validity</p>
                                    <p>5 June 2025</p>
                                </td><i class="fa-solid fa-pen-to-square"></i>
                            </tr>
                            <tr>
                                <td>
                                <p className='contentHeading'>Charge Code / PO Number</p>
                                    <p>Required</p>
                                </td>
                                <td>
                                <p className='contentHeading'>Duration of File Storage</p>
                                    <p>90 days</p>
                                </td>
                                <td>
                                <p className='contentHeading'>Currency</p>
                                    <p>IN Rupee (Rs)</p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                <p className='contentHeading'>MSLA</p>
                                    <div className="innerTableData" >
                                        <p>321412 EZ&lt;&gt;TVS MOU_signed by George.pdf</p>
                                        <span className='eyeIcon'>
                                            <FaEye/>
                                        </span>
                                        <span class="download_icon">
                                           <FaDownload/>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                <p className='contentHeading'>VAT+WHT</p>
                                    <p>5%+5%</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='contentHeading'>Corporte price as per MSLA</p>
                    <div class="services-section">
                    <table class="corporate_details-table">
                        <thead class="table_heading">
                            <th>Service</th>
                            <th>Units</th>
                            <th>List Price</th>
                            <th>Offered Price</th>
                            <th>Discount</th>
                        </thead>
                        <tbody>
                            <tr class="table_collection corporate_collection_details">
                                <td>Tamil Language Translation:EZ Assured</td>
                                <td>Words</td><td>0.1 AED</td>
                                <td>0.09 AED</td><td>10% ( 19% )</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
            
          
        </>
    )
}
