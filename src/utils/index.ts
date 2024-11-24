export const roundToOneDecimal = (value: number): number => {
  return parseFloat(value.toFixed(1));
};


export const convertMetersToKilometers = (meters: number): string => {
    const kilometers = meters / 1000;
    return `${roundToOneDecimal(kilometers)} km`; 
};


export const  getDayAndMonth=(timestamp:number) =>{
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}`;
}


export   const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};