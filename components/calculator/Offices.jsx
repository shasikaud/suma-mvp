'use client'

import { useState, useEffect } from "react";

const Offices = ({ user, updateUserData }) => {
    const [offices, setOffices] = useState([])
    const [office, setOffice] = useState({
        name: '',
        officeLocation: '',
        employeeCount: 0
    })

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
            employeeCount: 0
        })
        updateUserData('offices', offices);
    }

    const updateOffice = (name, value) => {
        const data = { [name]: value }
        const updatedOffice = {...office, ...data};
        setOffice(updatedOffice);
        // console.log(office);
    }

    return (
        <div className="flex flex-col ml-[265px] mx-8 py-8">
            <div className="py-4 px-8">
                <h1 className="text-2xl mt-10 mb-4">Offices</h1>
                <h3 className="font-semibold mb-4">Add new office</h3>
                <form className="flex flex-col">
                    <label>Name</label>
                    <input className="border-gray-200 rounded-md border-2 p-2 mb-4" 
                        type="text" 
                        name="name" 
                        value={office.name}
                        onChange={(e) => {updateOffice(e.target.name, e.target.value)}
                    }/>

                    <label className="font-sm">Office Location</label>
                    <input className="border-gray-200 rounded-md border-2 p-2 mb-4" 
                        type="text" 
                        name="officeLocation" 
                        value={office.officeLocation}
                        onChange={(e) => {updateOffice(e.target.name, e.target.value)}
                    }/>

                    <label className="font-sm">Employee Count</label>
                    <input className="border-gray-200 rounded-md border-2 p-2 mb-4" 
                        type="number" 
                        name="employeeCount" 
                        value={office.employeeCount}
                        onChange={(e) => {updateOffice(e.target.name, e.target.value)}
                    }/>

                    <button onClick={addOffice}>Add</button>
                </form>
            </div>

            <div className="flex flex-col bg-purple-200">
                {offices.map((office, index) => {
                    return (
                        <div className="bg-purple-300" key={index}>
                            <h1>{office.name}</h1>
                            <h1>{office.officeLocation}</h1>
                            <h1>{office.employeeCount}</h1>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row justify-end mt-4">
                <button className="bg-green-500 text-slate-50 rounded-lg px-4 py-2 transition hover:bg-primaryHover" onClick={e => {updateUserData('state', 'IT')}}>Continue</button>
            </div>
        </div>
    )
}

export default Offices