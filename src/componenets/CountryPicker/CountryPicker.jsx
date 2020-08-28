import React,{useState,useEffect} from 'react';
import {fetchCountries} from '../../api';
import {FormControl,NativeSelect} from '@material-ui/core';
import styles from './CountryPicker.module.css';
export const CountryPicker = ({handleCountryChange}) => {
    const [Countries,setCountries]=useState([]);
     
    useEffect(() => {
        const fetchAPI=async()=>{
            setCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setCountries])
    return (
        <FormControl className={styles.formControl}> 
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {Countries.map((country,ind)=>(
                    <option value={country} key={ind} >{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;