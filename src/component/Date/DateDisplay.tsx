import { useState, useEffect} from 'react';
import './DateDisplay_module.scss';

const DateDisplay = () => {
    const [currentDate, setCurrentDate] = useState(new Date);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    // Get the individual date components
    const year : number = currentDate.getFullYear();
    const month : number = currentDate.getMonth() + 1; // Add 1 because month is zero-based
    const day : number= currentDate.getDate();
    const weekdays : string[] = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek : string = weekdays[currentDate.getDay()];
    const hour : number = currentDate.getHours();
    const minute : number= currentDate.getMinutes();
    const second : number= currentDate.getSeconds();


    // Format the date as a string
    const formattedDate = `${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${dayOfWeek} ${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;

    return (
        <div className='DateDisplay'>
            <h1>{formattedDate}</h1>
        </div>
    );
};

export default DateDisplay;