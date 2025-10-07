import { useState, useEffect } from "react"

import React from 'react'



function StateEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count changed to ${count}`);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}




function MountEffect() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    return <h2>Check the console for mount message</h2>;
}

function FetchEffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div>
            <h2>Posts:</h2>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

function TimerEffect() {
    const [tick, setTick] = useState(0);

    useEffect(() => {
        console.log("Component mounted");

        const timer = setInterval(() => {
            setTick(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Component unmounted");
        };
    }, []);

    return (
        <div>
            <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
                <h2>Tick: {tick}</h2>
            </div>

        </div>
    );
}

function TimerGoStop() {
    const [showTimer, setShowTimer] = useState(true);

    let content;
    if (showTimer) {
        content = <TimerEffect />;
    } else {
        content = <p>Timer is hidden.</p>;
    }


    return (
        <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
            <h1>🧪 Timer Demo</h1>
            <button onClick={() => setShowTimer(true)}>Mount Timer</button>
            <button onClick={() => setShowTimer(false)} style={{ marginLeft: '1rem' }}>
                Unmount Timer
            </button>

            {content}
        </div>
    );
}



export { StateEffect, MountEffect, FetchEffect, TimerEffect, TimerGoStop }