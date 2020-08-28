import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';

import {makeStyles} from '@material-ui/core';
import {Line,Bar} from 'react-chartjs-2';

//import styles from './Chart.css';

const useStyles = makeStyles((theme) => ({
    container:{
      
     
      justifyContent:'center',
      
      width:'85% !important',
  }
  }));
export const Chart = ({data:{confirmed,deaths,recovered},country}) => {
    const classes=useStyles;

    const [dailyData, setdailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setdailyData(await fetchDailyData());
            
        }  
        fetchAPI();        
    }, [])

    const lineChart=(
       dailyData?
        (<Line
            data={{
                labels:dailyData.map(({date}) => date),
                datasets:[{
                    data:dailyData.map(({confirmed})=> confirmed),
                    label:'Infected',
                    borderColor:'rgba(0,0,255,0.5)',
                    fill:true,

                },{
                    data:dailyData.map(({deaths})=> deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }],        
            }}
        
        
        />):null

            
    );
    const barChart=(
       
       confirmed?(
           
       
        <Bar
        
        data={{
            labels:["Infected",'Recovered','Deaths'],
            datasets:[{
                label:'Peaople',
                backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)',],
                data:[confirmed.value,recovered.value,deaths.value],
            }]
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`Current State in ${country}`},
        }}
        
        />):null
    );

    return (
        <div className={classes.container}>
            {console.log(country)}
            {country? barChart: lineChart}
        </div>
    )
}

export default Chart;