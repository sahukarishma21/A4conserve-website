import ProgramImage from '../../../Assets/thinking-svgrepo-com.svg';
import ProgramImage2 from '../../../Assets/hammer-and-wrench-svgrepo-com.png.svg';
import ProgramImage3 from '../../../Assets/employee-group-svgrepo-com.png.svg';
import './Data.css';
import React, { useState, useEffect } from 'react';
const Data = () => {
    const [yearsOfExperience, setYearsOfExperience] = useState(90);
    const [numClients, setNumClients] = useState(0);
    const [numEmployees, setNumEmployees] = useState(10);

    useEffect(() => {
        const experienceInterval = setInterval(() => {
            setYearsOfExperience(yearsOfExperience + 1);
        }, 500); // Increase duration for experience interval

        const clientsInterval = setInterval(() => {
            setNumClients(numClients + 1);
           
        }, 502); // Increase duration for clients interval

        const employeesInterval = setInterval(() => {
            setNumEmployees(numEmployees + 1);
        }, 503); // Increase duration for employees interval

        return () => {
            clearInterval(experienceInterval);
            clearInterval(clientsInterval);
            clearInterval(employeesInterval);
        };
    }, [yearsOfExperience, numClients, numEmployees]);
    return (
        <div className="program-container" >
        <div className='all'>
            <h1 className='heading'>"Without environment sustainability,economic stability and social
            <br/>cohesion cannot be achieved".<br/>
            -By Phil Harding</h1>
            <div class="row program-row">
                <div class="col-program">
                    <img
                        class="program-card-image"
                        src={ProgramImage}
                        alt=""
                    />
                    <h1 className='num'>{yearsOfExperience}</h1>
                    <p1 >(Cumulative) Years of
                        experience</p1>
                </div>
                <div class="col-program">
                    <img
                        class="program-card-image"
                        src={ProgramImage2}
                        alt=""
                    />
                    <h1 class="num">{numClients}</h1>
                    <p>Clients</p>
                </div>
                <div class="col-program">
                    <img
                        class="program-card-image"
                        src={ProgramImage3}
                        alt=""
                    />
                    <h1 className='num'>{numEmployees}</h1>
                    <p >Employees</p>
                </div>
            </div>
        </div>
        </div>


    );
};
export default Data;