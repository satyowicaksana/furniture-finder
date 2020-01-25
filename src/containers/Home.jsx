import React from 'react'
import './Home.css'
import { Grid, Paper } from '@material-ui/core'

export default () => {
  return (
    <>
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
      <div className="content">
        <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} className="furn-card">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <h3>Product Name</h3>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <h4 className="price">Price</h4>
                </Grid>
              </Grid>
              <p>You can specify some description text in here.</p>
              <p className="furn-styles">Furniture Styles</p>
              <h4 className="furn-delivery">Delivery Days</h4>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} className="furn-card">xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} className="furn-card">xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} className="furn-card">xs=12 sm=6</Paper>
          </Grid>
        </Grid>
        </div>
      </div>
    </>
  )
}