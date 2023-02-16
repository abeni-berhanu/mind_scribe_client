import React, { Component } from 'react'
import logoWhite from './../images/horizontal white.svg'

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isActive: false
    }
  }
  
  
  render() {
    const toggleActive = () =>  {
      this.setState({
      isActive: this.state.isActive? false: true
      })
    }

    return (
    <header className='main-header'>
        <div className='logo-wrapper'> 
            <img src={logoWhite} className='logo' alt=''></img>
        </div>
        <div onClick={toggleActive} className={this.state.isActive? "humburger-menu active": "humburger-menu "}>
              <div className='humburger'></div>
              <div className='humburger'></div>
              <div className='humburger'></div>
              
        </div>
        <nav className={this.state.isActive? "active": ""}>            
            <a className='journals' href='#'>Journals</a>
            <a className='notes' href='#'>Notes</a>
            <a className='calendar' href='#'>Calendar</a>
        </nav>
    </header>
  )}


  componentDidMount() {
    fetch("/first", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
        name: 'abenezer',
        age: '20'
        }
      )
    })
  }

   
} 

export default Header;