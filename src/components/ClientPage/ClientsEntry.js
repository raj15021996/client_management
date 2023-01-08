import React, { useEffect, useState } from 'react'
import './Client.css'
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';

export default function ClientsEntry() {
    const [sort, setSort] = useState(false);
    const [selectCom, setSelectCom] = useState(false);
    
    const details = [
        {
            id: 1,
            title: "Hitachi Hi-rel Private Limited",
            code: "HHPE",
            entry: 3,
            user: 6
        },
        {
            id: 2,
            title: "Tata Power Private Limited",
            code: "TPPL",
            entry: 3,
            user: 6
        },
        {
            id: 3,
            title: "EZ Work",
            code: "EZ",
            entry: 3,
            user: 6
        },
        {
            id: 4,
            title: "Bajaj Private Limited",
            code: "BPL",
            entry: 3,
            user: 6
        },
        {
            id: 5,
            title: "HP Private Limited",
            code: "Hp",
            entry: 3,
            user: 6
        },
        {
            id: 6,
            title: "Amazon",
            code: "AZ",
            entry: 3,
            user: 6
        }
    ]

    const handlechange = () => {
        setSort(!sort)
    }
    const selectCompany = (id) => {
        const getCom=details.find((item)=>item.id==id)
        setSelectCom(!selectCom);
    }
    return (
        <>
            <div className='client-container'>
                <div className='client-heading'>
                    <div className='innerHeading'>
                        <div className='title'>
                            <p className='t-name'>Client</p>
                        </div>
                        <div className='sort-btn' onClick={handlechange}>
                            {
                                sort ? <FaSortAmountDownAlt /> : <FaSortAmountUpAlt />
                            }
                        </div>
                        <div className='c-time'>
                            <p className='d-name'>Creation Time</p>
                        </div>
                    </div>
                    <div className='addBtn'>
                        <FaPlusSquare />
                    </div>
                </div>
                <div className='search'>
                    <input type='text' placeholder='company,Entry, User, Domain' />
                </div>
                <div className='select-date'>
                    <select>
                        <option>August 2022</option>
                        <option>october 2022</option>
                        <option>December 2022</option>
                        <option>April 2022</option>
                        <option>January 2023</option>
                    </select>
                </div>

                {details.map((data) => (
                    <div key={data.id} className='companyData'
                        onClick={()=>selectCompany(data.id)}
                        style={{
                            backgroundColor: selectCom ? 'rgb(10, 2, 58)' : 'white',
                            color: selectCom ? 'white' : ""
                        }}
                    >
                        <div className='com-1'>
                            <div className='comp-name'>
                                <p>{data.title}</p>
                            </div>
                            <div className='comp-name'>
                                <p>{data.code}</p>
                            </div>
                        </div>
                        <div className='com-1'>
                            <div className='comp-en'>
                                <p>{data.entry} Entry</p>
                            </div>
                            <div className='comp-en'>
                                <p>{data.user} User</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </>
    )
}
