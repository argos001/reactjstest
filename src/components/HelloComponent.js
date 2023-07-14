import {render} from "@testing-library/react";
import {useEffect, useState} from "react";

export default function HelloComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("component rendered")

    })
    useEffect(() => {
        console.log("component init")
        return () => {
            console.log("component destroyed")
        }

    }, [])
    useEffect(()=>{
        console.log('count -> ',count)
    },[count])
    return (
        <>
            <hr/>
            <div>
                <h2>hello component</h2>
                <h3>{count}</h3>
                <button onClick={() => setCount(count => count + 1)}>Count</button>
                <hr/>

            </div>
        </>
    );
}