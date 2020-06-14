import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Breed from './Breed';

function Connect() {

    useEffect(() => {
        fetchBreeds();
    }, []);


    const [breedsData, setBreedsData] = useState([]);

    const fetchBreeds = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const breeds = await res.json();
        setBreedsData(breeds.message);     
    };

    const breedsKey = Object.keys(breedsData);
    console.log(breedsKey)

    return (
        <div>
            {breedsKey && breedsKey.map((key, index) => (
                <Breed name={key} values= {breedsData[key]}/>
            ))}
        </div>
        
    )
}

export default Connect;