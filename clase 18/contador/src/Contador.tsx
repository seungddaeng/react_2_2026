import {useState} from 'react';

export default function Contador () {
    const [counter, setCounter] = useState<number>(0);

    // const count = ():void => {
    //     counter ++;
    //     console.log(counter);
    // }

    return <button onClick={() => {
        setCounter(counter + 1)
        }
    }>
        {counter}
    </button>
}