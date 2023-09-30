'use client'

import { useState, useEffect } from "react"

const Commuting = ({ user, updateUserData }) => {

    const [offices, setOffices] = useState([])

    useEffect(() => {
        const addedOffices = user?.data?.offices;
        if (addedOffices) setOffices(user.data.offices);
    }, [])

    if (offices.length === 0) return (
        <div className="ml-[265px] px-8 h-full bg-backgroundColor">
            <h1>No offices have been added!
            <span>
            <h1 
                className="text-primary underline" 
                onClick={e => {updateUserData('state', 'OFFICES')}}>
                Add office?
            </h1>
            </span>
            </h1>
            <button 
                className="bg-primary text-white rounded-xl px-4 py-2 mb-20" 
                onClick={e => {updateUserData('state', 'BUSINESS_TRAVEL', 'COMMUTING', true)}}>
                Continue
            </button>
        </div>
    )

    let maxOffice = offices[0];
    offices.forEach(office => {
        if (office.employeeCount > maxOffice.employeeCount) maxOffice = office
    })

    return (
        <div className="ml-[265px] px-8 h-full bg-backgroundColor">

        <div className="flex flex-col">
            <h1 className="text-2xl">Employee Commuting: {maxOffice.name}</h1>
            <h1 className="text-xs  mb-5">Office with the highest number of employees will be considered.</h1>

            <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
                <h1>How many employees work from home?</h1>
                <input className="border-gray-200 rounded-md border-2 p-2"
                    type="number" 
                    value={user?.data?.wfhEmployeeCount} 
                    min="0"
                    max={maxOffice.employeeCount}
                    onChange={(e)=>{updateUserData('wfhEmployeeCount', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200">
                <h1>Average number of working days per year </h1>
                <input className="border-gray-200 rounded-md border-2 p-2"
                    type="number" 
                    value={user?.data?.workingDaysAvg} 
                    min="0"
                    max="366"
                    onChange={(e)=>{updateUserData('workingDaysAvg', Number(e.target.value))}}>
                </input>
            </div>
        </div>

        <div className="flex flex-col mt-10">
            <div className="mb-10">
                <h1 className="text-2xl">Mode of transportation: {maxOffice.name}</h1>
                <h2 className="text-sm text-gray-600">Percentages used each mode</h2>
            </div>
            <div className="flex flex-row py-8 justify-start items-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
                <h1>Walk, bike or electric scooter %</h1>
                <input className="border-gray-200 rounded-md border-2 p-2"
                    type="number" 
                    value={user?.data?.walkBikeScooterPerct} 
                    min="0"
                    max="100"
                    onChange={(e)=>{updateUserData('walkBikeScooterPerct', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-col bg-white px-10 gap-2 rounded-xl border-2 py-8 border-gray-200 mb-4 ">
                <div className="flex flex-row justify-start items-center ">
                    <h1>Train % </h1>
                    <input className="border-gray-200 rounded-md border-2 p-2 ml-4"
                        type="number" 
                        value={user?.data?.trainPerct} 
                        min="0"
                        max="100"
                        onChange={(e)=>{updateUserData('trainPerct', Number(e.target.value))}}>
                    </input>
                </div>

                <div className="flex flex-row justify-start items-center ">
                    <h1>Daily one-way distance between home and work (average) km</h1>
                    <input className="border-gray-200 rounded-md border-2 p-2 ml-4"
                        type="number" 
                        value={user?.data?.dailyDistanceHomeWorkTrain} 
                        min="0"
                        onChange={(e)=>{updateUserData('dailyDistanceHomeWorkTrain', Number(e.target.value))}}>
                    </input>
                </div>
            </div>

            <div className="flex flex-col bg-white px-10 gap-2 rounded-xl border-2 py-8 border-gray-200 mb-4">
                <div className="flex flex-row justify-start items-center ">
                    <h1>Bus % </h1>
                    <input className="border-gray-200 rounded-md border-2 p-2 ml-4"
                        type="number" 
                        value={user?.data?.busPerct} 
                        min="0"
                        max="100"
                        onChange={(e)=>{updateUserData('busPerct', Number(e.target.value))}}>
                    </input>
                </div>

                <div className="flex flex-row justify-start items-center ">
                    <h1>Daily one-way distance between home and work (average) km</h1>
                    <input className="border-gray-200 rounded-md border-2 p-2 ml-4"
                        type="number" 
                        value={user?.data?.dailyDistanceHomeWorkBus} 
                        min="0"
                        onChange={(e)=>{updateUserData('dailyDistanceHomeWorkBus', Number(e.target.value))}}>
                    </input>
                </div>
            </div>

            <div className="flex flex-col bg-white px-10 gap-2 rounded-xl border-2 py-8 border-gray-200 mb-4">
                <div className="flex flex-row justify-start items-center ">
                    <h1>Personal Car % </h1>
                    <input className="border-gray-200 rounded-md border-2 p-2 ml-4"
                        type="number" 
                        value={user?.data?.carPerct} 
                        min="0"
                        max="100"
                        onChange={(e)=>{updateUserData('carPerct', Number(e.target.value))}}>
                    </input>
                </div>

                <div className="flex flex-row justify-start items-center">
                    <h1>Daily one-way distance between home and work (average) km</h1>
                    <input className="border-gray-200 rounded-md border-2 p-2 ml-4"
                        type="number" 
                        value={user?.data?.dailyDistanceHomeWorkCar} 
                        min="0"
                        onChange={(e)=>{updateUserData('dailyDistanceHomeWorkCar', Number(e.target.value))}}>
                    </input>
                </div>
            </div>
            
        </div>

        <div className="flex flex-row justify-end my-10">
        <button 
            className="bg-primary text-white rounded-xl px-4 py-2 mb-20" 
            onClick={e => {updateUserData('state', 'BUSINESS_TRAVEL', 'COMMUTING', true)}}>
            Continue
        </button>
        </div>

    </div>
  )
}

export default Commuting