import { Component } from 'react'
import {Container} from 'react-bootstrap'

class Class extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        console.log('constructor')
    }

    componentDidMount(){
        console.log('didmount')
        setTimeout(() => {
            console.log('did')
            this.setState({counter: this.state.counter + 1})
        }, 3000)
    }

    componentDidUpdate() {
        console.log('didupdate')
    }

    render() {
        console.log('render')
        return (
            <Container>
                Counter: {this.state.counter}
                {this.state.counter === 0 && <ClassSecond />}
            </Container>
        )
    }
}

class ClassSecond extends Component {

    componentWillUnmount() {
         console.log('unmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                Class Second
            </div>
        )
    }
}

export default Class
