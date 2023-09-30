'use client'

import { useState, useEffect } from "react";
import COUNTRIES from "@/utils/lists";

const Offices = ({ user, updateUserData }) => {

    const countries = COUNTRIES.countries;
    const heatingSources = [
        'Electricity',
        'Natural gas',
        'Domestic fuel oil',
        'Biogas',
        'Green electricity (solar, wind, hydro)',
        'Heating network',  
    ]

    const [offices, setOffices] = useState([])
    const [office, setOffice] = useState({
        name: '',
        officeLocation: '',
        employeeCount: 0,
        squareMeters: 0,
        energyConsumptionYearly: 0,
        heatingSource: '',
    })

    const hasOffice = user?.data?.hasOffice;
    const btnColorYes = (hasOffice === 'NOT-DEFINED') ? '' : (hasOffice === 'YES') ? 'bg-primary text-black border-black' : 'bg-white border-gray-200 text-gray-200'
    const btnColorNo = (hasOffice === 'NOT-DEFINED') ? '' : (hasOffice === 'YES') ? 'bg-white border-gray-200 text-gray-200' : 'bg-primary text-black border-black'

    useEffect(() => {
        const addedOffices = user?.data?.offices;
        if (addedOffices) setOffices(user.data.offices);
    }, [])

    const addOffice = (e) => {
        e.preventDefault();
        offices.push(office);
        setOffice({
            name: '',
            officeLocation: '',
            employeeCount: 0,
            squareMeters: 0,
            energyConsumptionYearly: 0,
            heatingSource: '',
        })
        updateUserData('offices', offices);
    }

    const updateOffice = (name, value) => {
        const data = { [name]: value }
        const updatedOffice = {...office, ...data};
        setOffice(updatedOffice);
    }

    const deleteOffice = (name) => {
        console.log(`delete office `, name)
        const existingOffices = [...offices];
        const filtered = existingOffices.filter(office => office.name !== name);
        console.log(filtered)
        setOffices(filtered);
    }

    return (
        <div className={`flex flex-col ml-[265px] h-full px-8 bg-backgroundColor`}>
            <h1 className="text-2xl ">Offices</h1>
            <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mt-10 mb-4">
                <h3 className="font-semibold">Do you have an office?</h3>
                <div className="flex flex-row gap-4">
                    <button 
                        onClick={e => {updateUserData('hasOffice', 'YES')}}
                        className={`rounded-full px-4 py-2 text-sm m-2 border-2 ${btnColorYes}`}
                    > 
                        Yes
                    </button>
                    <button 
                        onClick={e => {updateUserData('hasOffice', 'NO')}}
                        className={`rounded-full px-4 py-2 text-sm m-2 border-2 ${btnColorNo}`}
                    >
                        No
                    </button>
                </div>
            </div>

            {hasOffice === 'YES' ? 
            <>
                <div className={`flex flex-col py-8 bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4`}>
                    <h3 className="font-semibold">List your offices</h3>
                    <form className="flex flex-col">
                        <label>Name</label>
                        <input className="border-gray-200 rounded-md border-2 p-2"
                            type="text" 
                            name="name" 
                            value={office.name}
                            onChange={(e) => {updateOffice(e.target.name, e.target.value)}
                        }/>

                        <label>Office Country</label>
                        <select 
                            className="border-gray-200 rounded-md border-2 p-2"
                            name='officeLocation'
                            onChange={(e) => {updateOffice(e.target.name, e.target.value)}}
                        >
                            {
                                countries.map((country, index) => {
                                return (<option key={index}>{country}</option>)
                                })
                            }
                        </select>

                        <label>How many employees office occupies?</label>
                        <input className="border-gray-200 rounded-md border-2 p-2"
                            type="number" 
                            name="employeeCount" 
                            value={office.employeeCount}
                            onChange={(e) => {updateOffice(e.target.name, Number(e.target.value))}
                        }/>

                        <label>Square meters (m2)</label>
                        <input className="border-gray-200 rounded-md border-2 p-2"
                            type="number" 
                            name="squareMeters" 
                            value={office.squareMeters}
                            onChange={(e) => {updateOffice(e.target.name, Number(e.target.value))}
                        }/>

                        <label>Energy consumption yearly kWh</label>
                        <input className="border-gray-200 rounded-md border-2 p-2"
                            type="number" 
                            name="energyConsumptionYearly" 
                            value={office.energyConsumptionYearly}
                            onChange={(e) => {updateOffice(e.target.name, Number(e.target.value))}
                        }/>

                        <label>What is the heating source?</label>
                        <select 
                            name="heatingSource"
                            onChange={e => {updateOffice(e.target.name, e.target.value)}}
                            className="border-gray-200 rounded-md border-2 p-2">
                            {
                                    heatingSources.map((source, index) => {
                                    return (<option key={index}>{source}</option>)
                                    })
                            }
                        </select>

                        <button onClick={addOffice} className="border-2 rounded-full bg-white px-6 py-2 font-medium text-sm">Add New Office</button>
                    </form>
                </div>

                <div className="flex flex-col gap-2 m-2 p-2 bg-secondary">
                    {offices.map((office, index) => {
                        return (
                            <div className="bg-purple-300" key={index} name={office.name}>
                                <p>{office.name}</p>
                                <p>{office.officeLocation}</p>
                                <p>{office.employeeCount}</p>
                                <p>{office.squareMeters}</p>
                                <p>{office.energyConsumptionYearly}</p>
                                <p>{office.heatingSource}</p>
                                <button onClick={()=> {deleteOffice(office.name)}}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </>
            : <></>
            }
            <div className="flex flex-row">
                <button className="justify-end text-white rounded-full px-4 py-2 bg-primary mt-10" onClick={e => {updateUserData('state', 'IT', 'OFFICES', true)}}>Continue</button>
            </div>
        </div>
    )
}

export default Offices