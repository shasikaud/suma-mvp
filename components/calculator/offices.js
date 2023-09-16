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
        <div className="flex flex-col">
            <div className="bg-purple-100">
                <h1>Add new office</h1>
                <form className="flex flex-col">
                    <label>Name</label>
                    <input  
                        type="text" 
                        name="name" 
                        value={office.name}
                        onChange={(e) => {updateOffice(e.target.name, e.target.value)}
                    }/>

                    <label>Office Location</label>
                    <input 
                        type="text" 
                        name="officeLocation" 
                        value={office.officeLocation}
                        onChange={(e) => {updateOffice(e.target.name, e.target.value)}
                    }/>

                    <label>Employee Count</label>
                    <input 
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

            <button className="bg-red-100" onClick={e => {updateUserData('state', 'IT')}}>Continue</button>
        </div>
    )
}

export default Offices