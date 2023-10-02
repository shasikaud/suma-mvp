'use client'

import LISTS from "@/utils/lists";
import { useState, useEffect } from "react";

const Offices = ({ user, updateUserData }) => {

    if (!user?.data) return <LoadingScreenSecondary/>

    const countries = LISTS.COUNTRIES;
    const heatingSources = LISTS.HEATING_SOURCES;

    const initialOfficeState = {
        name: '',
        officeLocation: countries[0],
        employeeCount: 0,
        squareMeters: 0,
        energyConsumptionYearly: 0,
        heatingSource: heatingSources[0],
    }

    const [offices, setOffices] = useState([])
    const [office, setOffice] = useState(initialOfficeState)

    const hasOffice = user?.data?.hasOffice;
    const btnColorYes = (hasOffice === 'NOT-DEFINED') ? '' : (hasOffice === 'YES') ? 'bg-primary text-black border-black' : 'bg-white border-gray-200 text-gray-200'
    const btnColorNo = (hasOffice === 'NOT-DEFINED') ? '' : (hasOffice === 'YES') ? 'bg-white border-gray-200 text-gray-200' : 'bg-primary text-black border-black'

    const disabled = hasOffice === 'NOT-DEFINED' || (hasOffice === 'YES' && offices.length === 0)
    const enableAddOffice = office.name !== '' 
                            && office.employeeCount > 0 
                            && office.energyConsumptionYearly > 0
                            && office.squareMeters > 0

    useEffect(() => {
        const addedOffices = user?.data?.offices;
        if (addedOffices) setOffices(user.data.offices);
    }, [])

    const addOffice = (e) => {
        e.preventDefault();
        offices.push(office);
        setOffice(initialOfficeState)
        updateUserData('offices', offices);
    }

    const updateOffice = (name, value) => {
        const data = { [name]: value }
        const updatedOffice = {...office, ...data};
        setOffice(updatedOffice);
    }

    const deleteOffice = (name) => {
        const existingOffices = [...offices];
        const filtered = existingOffices.filter(office => office.name !== name);
        setOffices(filtered);
    }

    return (
        <div className={`flex flex-col ml-[265px] h-full px-8 bg-backgroundColor`}>
            <h1 className="text-2xl mb-4 pt-10 pb-4">Offices</h1>
            <div className="flex flex-col py-4 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mt-10 mb-4">
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
                        <input className="border-gray-200 rounded-md border-2 p-2 mb-4"
                            type="text" 
                            name="name" 
                            value={office.name}
                            onChange={(e) => {updateOffice(e.target.name, e.target.value)}
                        }/>

                        <label>Office Country</label>
                        <select 
                            className="border-gray-200 rounded-md border-2 p-2 mb-4"
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
                        <input className="border-gray-200 rounded-md border-2 p-2 mb-4"
                            type="number" 
                            min="0"
                            name="employeeCount" 
                            value={office.employeeCount}
                            onChange={(e) => {updateOffice(e.target.name, Number(e.target.value))}
                        }/>

                        <label>Square meters (m2)</label>
                        <input className="border-gray-200 rounded-md border-2 p-2 mb-4"
                            type="number" 
                            min="0"
                            name="squareMeters" 
                            value={office.squareMeters}
                            onChange={(e) => {updateOffice(e.target.name, Number(e.target.value))}
                        }/>

                        <label>Energy consumption yearly kWh</label>
                        <input className="border-gray-200 rounded-md border-2 p-2 mb-4"
                            type="number" 
                            min="0"
                            name="energyConsumptionYearly" 
                            value={office.energyConsumptionYearly}
                            onChange={(e) => {updateOffice(e.target.name, Number(e.target.value))}
                        }/>

                        <label>What is the heating source?</label>
                        <select 
                            name="heatingSource"
                            onChange={e => {updateOffice(e.target.name, e.target.value)}}
                            className="border-gray-200 rounded-md border-2 p-2 mb-4">
                            {
                                    heatingSources.map((source, index) => {
                                    return (<option key={index}>{source}</option>)
                                    })
                            }
                        </select>

                        <button 
                            disabled={!enableAddOffice}
                            onClick={addOffice} 
                            className={`${!enableAddOffice ? 'bg-secondary' : 'bg-primary'} text-white rounded-xl px-4 py-2 mt-10`} 
                        >
                            Add New Office
                        </button>

                    </form>
                </div>

                <div className="flex flex-col gap-2 m-2 p-2 bg-secondary">
                    <h1>Offices</h1>
                    {offices.map((office, index) => {
                        return (
                            <div className="bg-white p-2" key={index} name={office.name}>
                                <p>{office.name}</p>
                                <p>{office.officeLocation}</p>
                                <p>{office.employeeCount}</p>
                                <p>{office.squareMeters}</p>
                                <p>{office.energyConsumptionYearly}</p>
                                <p>{office.heatingSource}</p>
                                <button 
                                    className="bg-red-100"
                                    onClick={()=> {deleteOffice(office.name)}}>Remove
                                </button>
                            </div>
                        )
                    })}
                </div>
            </>
            : <></>
            }
            
            <div className="flex flex-row gap-8">

                <button 
                    className="bg-white text-primary border-2 border-primary rounded-xl px-4 py-2" 
                    onClick={e => {updateUserData('state', 'COMPANY_OVERVIEW')}}>
                Previous
                </button>

                <button 
                    disabled={disabled}
                    className={`${disabled ? 'bg-secondary' : 'bg-primary'} text-white rounded-xl px-4 py-2`} 
                    onClick={e => {updateUserData('state', 'IT', 'OFFICES', true)}}>
                Continue
                </button>


            </div>

        </div>
    )
}

export default Offices