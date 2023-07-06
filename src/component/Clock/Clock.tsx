import React, { useState, useEffect } from 'react';
import './Clock_module.scss'


type handleFunction = () => void;

const Clock = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(25);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: any;

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    if (minutes > 0) {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    } else {
                        clearInterval(interval);
                        // Timer has finished, perform any necessary actions here
                    }
                }
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning, minutes, seconds]);

    const handleStart : handleFunction = () => {
        setIsRunning(true);
    };

    const handleStop : handleFunction = () => {
        setIsRunning(false);
    };

    const handleReset : handleFunction = () => {
        setIsRunning(false);
        setMinutes(25);
        setSeconds(0);
    };

    const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value) {
            const num = parseInt(value);
            if (num >= 0 && num <= 60) {
                setMinutes(num);
            }
        }else{
            setMinutes(0);
        }
    }

    const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value) {
            const num = parseInt(value)
            if (num >= 0 && num <= 60) {
                setSeconds(num);
            }
        }else{
            setSeconds(0);
        }
    }

    const formattedMinutes : string = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedSeconds : string = seconds < 10 ? `0${seconds}` : seconds.toString();

    return (
        <>
            <div className="clock">
                <div className="clock__timming">

                    <div className='clock__timming__display'>
                        <input value={formattedMinutes} type='number' onFocus={handleStop} onChange={handleMinutesChange}/>
                        <span>:</span>
                        <input value={formattedSeconds} type='number' onFocus={handleStop} onChange={handleSecondsChange}/>
                    </div>
                    <div className='clock__timming__buttons'>
                        <button className='clock__timming__buttons__start' onClick={handleStart}>Start</button>
                        <button className='clock__timming__buttons__stop' onClick={handleStop}>Stop</button>
                        <button className='clock__timming__buttons__reset' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clock;