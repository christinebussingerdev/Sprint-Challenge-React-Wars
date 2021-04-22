import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ProfileCard from './ProfileCard.js'


export default function SwapiFetch() {
    const [swapiData, setSwapiData] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then((response) => {

                const profiles = response.data.results
                setSwapiData(profiles)
            })
            .catch(err => {
                console.log('whoops : ', err)
            }) 
    }, [])

    console.log(swapiData)



    
    return ( 
        <div className="profile-case">
            {swapiData
                .map((item, index)=> {
                    return (
                        <ProfileCard 
                            name={item.name} 
                            height={item.height}
                            gender={item.gender}
                            eye_color={item.eye_color}
                            hair_color={item.hair_color}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}