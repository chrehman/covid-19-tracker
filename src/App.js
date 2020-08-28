import React from 'react';

// import Cards from './componenets/Cards/Cards';
// import Chart from './componenets/Chart/Chart';
// import CountryPicker from './componenets/CountryPicker/CountryPicker';

import {Cards,Chart,CountryPicker} from './componenets';
import {globalData} from './api';

import image from './image/image.png';
import styles from './App.module.css';


class App extends React.Component{
    state={
        data: {},
        country:'',
    }
   async componentDidMount(){
        const fetchData = await globalData();
        this.setState({data:fetchData});
        
    }    

    handleCountryChange=async(country)=>{
        const fetchData = await globalData(country);
        this.setState({data:fetchData,country:country});
        
       
    }
    render(){
        const {data,country}=this.state;
        return(
            <div className={styles.container}>
                <img src={image} alt="Covid-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            
            </div>
            
        )
    }
}

export default App;