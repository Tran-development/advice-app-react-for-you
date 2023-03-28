import React from "react"
import axios from "axios"

import './App.css'

class App extends React.Component {

    state = {
        advice: ''
    }

    componentDidMount() {
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip.advice
            console.log(response.data.slip.advice);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <h1>App</h1>
        )
    }
}

export default App