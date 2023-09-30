'use client'

import { useEffect } from "react";

import calculateCarbonFootPrint from "@/utils/carbonCalculator"

const Summary = ({ user }) => {

  const summary = calculateCarbonFootPrint(user);

  return (
    <div className='ml-[265px] flex flex-col w-full text-xl text-black p-4'>

        <h1 className='bg-white text-black'>Summary</h1>
        <h1>Electricity consumption: {summary.electricity}</h1>
        <h1>Cloud emissions: {summary.cloud}</h1>
        <h1>Electronics emissions: {summary.device}</h1>
        <h1>Commute emissions: {summary.commute}</h1>
        <h1>Flight emissions: {summary.flight}</h1>
        <h1>Total emissions: {summary.total/1000}</h1>
        <h1>Year measured: {user?.data?.calendarYear}</h1>
    </div>
  )
}

export default Summary
