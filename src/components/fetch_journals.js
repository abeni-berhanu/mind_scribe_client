import React, { useEffect, useState } from 'react'


function FetchJournals() {
  
  const [fetchCount, setfetcheCount] = useState(0)
  const [fetchedJournals, setfetchedJournals] = useState([])

   useEffect(() => {
    fetch("http://localhost:4000/first").then(
      response => response.json()
      ).then(
        data => {
          setfetchedJournals(data)
          fetchedJournals.forEach(user => {console.log(user.name)})
        })
  }, [fetchCount])

  return (
    <div></div>
  )
}

export default FetchJournals