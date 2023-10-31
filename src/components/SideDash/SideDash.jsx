import React from 'react'
import './SideDash.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'

const SideDash = () => {
  return (
    <div className='SideDash'>
        <div>
        <h3>Updates</h3>
        <Updates/>
        </div>
        <div>
        <h3>Customer Review</h3>
        <CustomerReview/>
        </div>
    </div>
  )
}

export default SideDash
