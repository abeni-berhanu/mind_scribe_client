import React from 'react'
import Header from './components/header'
import './App.css'
import BodyHeader from './components/journals_header'
import Journals from './components/journals'
import JOurnalInputForm from './components/journal_input'

export default function App() {
  let hideJournalInput = () => {
    document.querySelector('.journal-input-section').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
  }
  return (
      <>
      <div className='container'>
        <div className='shadow'>
          <Header/>
          <JOurnalInputForm/>
          <BodyHeader/>
          <Journals/>
        </div>
        <div onClick={hideJournalInput} className='overlay'></div>
      </div>
      </>
    )
}
