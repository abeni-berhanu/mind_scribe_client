import React, { Component } from 'react'

class JOurnalInput extends Component {
  render() {
    let hideJournalInput = () => {
      document.querySelector('.journal-input-section').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    }
    return (
      <section className='journal-input-section'>
        <div onClick={hideJournalInput} className="hide-journal-input-button active">
              <div></div>
              <div></div>
              
        </div>
        <div className='journal-input-head'>
          <h2>HOPE YOU HAD A NICE DAY</h2>
          <p>Record what you have experienced in the day</p>
        </div>
        <form>
          <div>
            <div className='event-input'>
              <div>The Event</div>
              <input placeholder="what wasthe event"></input>
            </div>
            <div className='tags-input'>
              <div>Tags</div>
              <select>
                <option>hello</option>
                <option>bye</option>
                <option>friend</option>
                <option>and</option>
              </select>
            </div>
            <div>
              <div>
                <div>Start Date</div>
                <input placeholder='12/05/2022'></input>
              </div>
              <div>
                <div>End Date</div>
                <input placeholder='30/07/2022'></input>
              </div>
              <div>
              <input type='checkbox'></input>
                <label>The day is exact (not estimated)</label>
              </div>
            </div>
          </div>
          <div>
            <label>Video and Images</label>
            <div>
              <button>Browse</button>
              <button>Remove</button>
            </div>
            <div></div>
          </div>
          <div>
            <button>Browse</button>
            <button>Remove</button>
          </div>
          
          
          

        </form>
      </section>
    )
  }
}

export default JOurnalInput;