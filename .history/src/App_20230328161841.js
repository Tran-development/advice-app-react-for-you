import React from "react"
import axios from "axios"

import './App.css'
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap" rel="stylesheet">
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
            const { advice } = response.data.slip
            
            this.setState({advice})
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render() {
        const { advice } = this.state

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                </div>
            </div>
        )
    }
}

export default App