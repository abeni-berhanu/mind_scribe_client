import React, { Component } from 'react'
import FetchJournals from './fetch_journals'

class Journals extends Component {
  render() {
    return (
      <section className='journals-section'>
        <FetchJournals/>
        <table>
            <thead>
                <tr>
                    <td className='journals-head event'>Event</td>
                    <td className='journals-head date'>Date</td>
                    <td className='journals-head tags'>Tags</td>
                    <td className='journals-head files'>Files</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>

                </tr>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>

                </tr>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>

                </tr>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>

                </tr>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>

                </tr>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>

                </tr>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>
                    
                </tr>
                <tr>
                    <td className='journal-data event'>I ate my lunch in Rome</td>
                    <td className='journal-data date'>14/01/2023</td>
                    <td className='journal-data tags'>
                        <ul>
                            <li>Friends</li>
                            <li>Hangout</li>
                            <li>Tour</li>
                        </ul>
                    </td>
                    <td className='journal-data files'>14/01/2023</td>

                </tr>
               
            </tbody>
        </table>
      </section>
    )
  }
}

export default Journals