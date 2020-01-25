import React, { useEffect, useState } from 'react'
import './Home.css'
import { Grid, Paper } from '@material-ui/core'

export default () => {
  const [products, setProducts] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [styles, setStyles] = useState([])
  const [search, setSearch] = useState('')

  const fetchProducts = async () => {
    const response = await fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
    const { products, furniture_styles } = await response.json()
    setProducts(products)
    setDisplayedProducts(products)
    setStyles(furniture_styles)
  }

  useEffect(() => {
    let reg = new RegExp(search, 'gi')
    let filtered = products.filter(product => product.name.match(reg))
    setDisplayedProducts(filtered)
  }, [search, products])

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <div className="header">
        <div className="container">
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Furniture" className="search">
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
          {displayedProducts.map(product => (
            <Grid key={product.name} item xs={12} sm={6}>
              <Paper elevation={2} className="furn-card">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <h3>{product.name}</h3>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <h4 className="price">IDR {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                  </Grid>
                </Grid>
                <p>{product.description.substring(0, 114)}...</p>
                <p className="furn-styles">{product.furniture_style.join(', ')}</p>
                <h4 className="furn-delivery">{product.delivery_time} Days</h4>
              </Paper>
            </Grid>
            )
          )}
        </Grid>
        </div>
      </div>
    </>
  )
}