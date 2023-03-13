import React from 'react'
// import logo from 'logo.png';
// import './App.css'

function Header({ setIsAdding }) {
    return (
        <div className='App'>
        <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title'>YDS YOUTHS KITCHENER</h1> */}
        <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
        </div>
        </header>
        </div>
    );
}

export default Header