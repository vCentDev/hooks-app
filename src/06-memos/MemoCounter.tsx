import { useCounter } from '@/Hooks/useCounter'
import { useMemo } from 'react';

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy_stuff_started')

    for (let index = 0; index < iterationNumber; index++) {
        console.log('ahí vamos...');
    }

    console.timeEnd('Heavy_stuff_started')
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {
    const { counter, increment } = useCounter(10_000)
    const { counter: counter2, increment: increment2 } = useCounter(10)

    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Memo - useMemo - {myHeavyValue}</h1>
            <hr />
            <h4>Counter: {counter}</h4>
            <h4>Counter2: {counter2}</h4>
            <div>
                <button
                    onClick={increment}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    +1
                </button>
                <button
                    onClick={increment2}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    second +1
                </button>
            </div>

        </div>
    )
}
