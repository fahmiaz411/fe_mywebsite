import {Container} from 'react-bootstrap'
import { useEffect, useState } from 'react'

function Function() {

    const [counter, setCounter] = useState(0)
    const [state, setState] = useState("s")

    useEffect(() => {
        setTimeout(() => {
            console.log('didMount')
            setCounter(counter + 1)
            setState('a')
        }, 3000)
    }, [])

    useEffect(() => {
        if(counter !== 0){
            console.log('didUpdate')
        }
    }, [state])

    return (
        <Container>
            Counter: {counter}
            { counter === 0 && <Second />}
        </Container>
    )
}

function Second () {

    useEffect(() => {
        return (
            () => {
                console.log('componentUnmount')
            }
        )
    }, [])
    return (
        <div>
            Second
        </div>
    )
}

export default Function
