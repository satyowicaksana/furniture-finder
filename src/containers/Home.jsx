import React, { useEffect, useState } from 'react'
import './Home.css'
import { Grid, Paper, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Input } from '@material-ui/core'

export default () => {
  const [products, setProducts] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [styles, setStyles] = useState([])
  const [search, setSearch] = useState('')
  const [searchStyles, setSearchStyles] = useState([])
  
  const fetchProducts = async () => {
    const response = await fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
    const { products, furniture_styles } = await response.json()
    setProducts(products)
    setDisplayedProducts(products)
    setStyles(furniture_styles)
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  useEffect(() => {
    let reg = new RegExp(search, 'gi')
    let filtered = products.filter(product => (
      product.name.match(reg) && 
      searchStyles.every(style => product.furniture_style.includes(style))
    ))
    setDisplayedProducts(filtered)
  }, [search, products, searchStyles])

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        marginTop: '45px',
      },
    },
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Furniture" className="search">
          </input>
          <div className="row-form">
            <FormControl className="form-control">
              <InputLabel className="input-label">Furniture Style</InputLabel>
              <Select
                className="select"
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={searchStyles}
                onChange={e => setSearchStyles(e.target.value)}
                input={<Input />}
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {styles.map(name => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                    <Checkbox color="primary" checked={searchStyles.indexOf(name) > -1} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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