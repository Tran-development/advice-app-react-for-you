import React from "react"
import axios from "axios"

import './App.css'

class App extends React.Component {

    state = {
        advice: ''
    }

    componentDidMount() {

    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            console.log(response);
        })
        .catch(() => {
            
        })
    }
    
    render() {
        return (
            <h1>App</h1>
        )
    }
}

export default App