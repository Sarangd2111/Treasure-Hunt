import React from 'react'
import '../stylesheets/rules.css'
const Rules = () => {
  return (
    <div className='rules'>
      <h2>Rules</h2>
      <div className="underline"></div>

      <p>&bull; You must be a registered user before playing.</p>
      <p>&bull; At each clue user will get 3 chances to answer.</p>
      <p>&bull; No external resources are allowed to use except provided within the game.</p>
      <p>&bull; Time taken to solve each clue will be stored, based on which leaderboard will be mapped.</p>
      <p>&bull; All the clues are connected with each other sequentially. Make sure to follow them wisely.</p>
      <p>&bull; Hints are provided at each clue to be followed to get your hands on the answer.</p>
      <p>&bull; Wrong answers might lead you towards the deadend unknowingly</p>
      <p>&bull; At Each Checkpoint you have 3 chances to answer.</p>
      <p>&bull; Wrong answers are not tolerated at dead ends.</p>
<br /><br />
      <p style={{textAlign:"center", fontSize:"40px"}}>All the best captain.... !! Bon Voyage !!</p>
    </div>
  )
}

export default Rules
