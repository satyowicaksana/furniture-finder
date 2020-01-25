import React from 'react'
import './Home.css'

export default () => {
  return (
    <div className="header">
      <div className="container">
        <input type="text" placeholder="Search Furniture" className="search">
        </input>
        <div className="row-form">
          <input type="text" placeholder="Search Furniture">
          </input>
          <input type="text" placeholder="Search Furniture">
          </input>
        </div>
      </div>
    </div>
  )
}