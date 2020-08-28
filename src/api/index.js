import axios from 'axios';

var url='https://covid19.mathdro.id/api';


export const globalData = async(country) => {
    var modefiedUrl=url;
    if(country){
        modefiedUrl=`${url}/countries/${country}`;
    }

    
    try {
         const {data:{confirmed,deaths,recovered,lastUpdate}}= await axios.get(modefiedUrl);
        const modifiedData={
            confirmed:confirmed,
            deaths:deaths,
            recovered:recovered,
            lastUpdate:lastUpdate,
        }
        return modifiedData;   
    } catch (error) {

    }
}

export const fetchDailyData=async()=>{
    try {

    const {data}=await axios.get(`${url}/daily`);
    const modifiedData=data.map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate,
    }))  
    return modifiedData;
       
    } catch (error) {

    }
}

export const fetchCountries=async() =>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`);
        return(countries.map((country)=>country.name));
    } catch (error) {
        
    }
}
