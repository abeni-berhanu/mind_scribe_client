import React, { Component } from 'react'

export class BodyHeader extends Component {
  render() {
    let showJournalInput = () => {
      document.querySelector('.journal-input-section').classList.add('active');
      document.querySelector('.overlay').classList.add('active');
    }
    return (
      <section className='body-header'>
        <div className='h1'>My Journals</div>
        <div className='sort-and-add'>
            <span className='label-and-sort'>
                <label className="label-small">Sort by</label><br/>
                <select className='sort-type'>
                    <option>Date</option>
                    <option>Name</option>
                    <option>Data type</option>
                </select>
            </span>
            <span onClick={showJournalInput} className='add-journal'>
                <button>ADD NEW</button>
            </span>
        </div>
      </section>
    )
  }
}

export default BodyHeader