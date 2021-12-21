import React, { useEffect } from 'react';
import Filter from "../Components/Filter";
import Card from "../Components/Card";
import { useDispatch } from 'react-redux';
import { createJobsData } from '../Features/filterSlice';


function Real() {
    const dispatch = useDispatch();

    useEffect(() => {
        let getData = () => {
            fetch("./data.json",{
                headers : { 
                    'Accept': 'application/json'
                   }
            })
                .then(res => res.json())
                    .then(data => dispatch(createJobsData(data.jobs)));
        };

        window.addEventListener("load", getData);
    });



    return (
        <div>
            <main>
                <Filter />
                <Card />
            </main>
        </div>
    )
}

export default Real;