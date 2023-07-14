import React from 'react';
import './gptAssist.css'

const App: React.FC = () => {
    return (
        <div className='main_div'>
            <h1 id='title'>Welcome to your personal Assistant</h1>
            <div className="input_div">
                <input className='prompt' type="text" placeholder='Enter your desire here 🤓' />
                <button>Click me</button>
            </div>
        </div>
    );
}

export default App;
