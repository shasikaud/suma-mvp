import ENERGY_RATINGS from "./energyRatingsOfCoutries";

const selectOffice = (offices)=> {
    if (offices.length === 0) return null;
    let maxOffice = offices[0];
    offices.forEach(office => {
        if (office.employeeCount > maxOffice.employeeCount) maxOffice = office
    })
    return maxOffice;
}

const calculateElectricityConsumption = (offices)=> {
    const maxOffice = selectOffice(offices);
    if (!maxOffice) return 0;
    const country = maxOffice.officeLocation;
    const ratingFactor = ENERGY_RATINGS.get(country);
    return ratingFactor*maxOffice.energyConsumptionYearly;
}

const calculateCloudServiceEmissions = (data)=> {
    return data?.awsFootprint + data?.gcpFootprint + data?.azureFootprint;
}

const calculateElectronicsEmissions = (data)=> {
    return (data?.laptopCount*250 + data?.desktopCount*500 + data?.mobileCount*65 + data?.screenCount*250);
}

const calculateCommuteEmissions = (data)=> {
    const maxOffice = selectOffice(data?.offices);
    if (!maxOffice) return 0;
    const wfoCount = Math.abs(maxOffice?.employeeCount - data?.wfhEmployeeCount);

    const trainEmissionFactor = 0.024;
    const trainEmissions = (data?.trainPerct*wfoCount/100)*(data?.dailyDistanceHomeWorkTrain)*2*(data?.workingDaysAvg)*trainEmissionFactor;

    const busEmissionFactor = 0.025;
    const busEmissions = (data?.busPerct*wfoCount/100)*(data?.dailyDistanceHomeWorkBus)*2*(data?.workingDaysAvg)*busEmissionFactor;

    const carEmissionFactor = 0.045;
    const carEmissions = (data?.carPerct*wfoCount/100)*(data?.dailyDistanceHomeWorkCar)*2*(data?.workingDaysAvg)*carEmissionFactor;

    return trainEmissions+busEmissions+carEmissions;
}

const calculateFlightEmissions = (data)=> {
    return (data?.shortHaulFlights*280)+(data?.mediumHaulFlights*540)+(data?.longHaulFlights*1027);
}

const calculateCarbonFootPrint = (user)=> {
    const country = user?.country;
    const electricityConsumptionOfOffice = calculateElectricityConsumption(user?.data?.offices);
    const cloudServicesEmissions = calculateCloudServiceEmissions(user?.data);
    const deviceEmissions = calculateElectronicsEmissions(user?.data);
    const commuteEmission = calculateCommuteEmissions(user?.data);
    const flightEmission = calculateFlightEmissions(user?.data);
    return {
        electricity: electricityConsumptionOfOffice,
        cloud: cloudServicesEmissions,
        device: deviceEmissions,
        commute: commuteEmission,
        flight: flightEmission,
        total: cloudServicesEmissions+deviceEmissions+commuteEmission+flightEmission,
    }
}

export default calculateCarbonFootPrint