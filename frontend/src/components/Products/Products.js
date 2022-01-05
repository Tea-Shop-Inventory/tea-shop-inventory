import React from 'react';
import {Grid} from '@material-ui/core';
import Tea from './Tea/Tea';
import useStyles from './styles'

const products = [
    {id: 1, name: 'Black', description: 'loose leaf black tea', price: '$5', image: 'https://static.turbosquid.com/Preview/2019/11/07__03_04_16/cover.jpg2A0C2B2E-C921-460E-8947-5C6031AD8D95Large.jpg'},
    {id: 2, name: 'Black', description: 'loose leaf black tea', price: '$5', image: 'https://static.turbosquid.com/Preview/2019/11/07__03_04_16/cover.jpg2A0C2B2E-C921-460E-8947-5C6031AD8D95Large.jpg'},
    {id: 3, name: 'Black', description: 'loose leaf black tea', price: '$5', image: 'https://static.turbosquid.com/Preview/2019/11/07__03_04_16/cover.jpg2A0C2B2E-C921-460E-8947-5C6031AD8D95Large.jpg'},
    {id: 4, name: 'Black', description: 'loose leaf black tea', price: '$5', image: 'https://static.turbosquid.com/Preview/2019/11/07__03_04_16/cover.jpg2A0C2B2E-C921-460E-8947-5C6031AD8D95Large.jpg'},
]
 




const Products = () => {
    const classes = useStyles();

    return (

        <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key ={product.id} xs={12} sm={6} md={4} lg={3}> 
                <Tea product={product} />
                </Grid>
            ))}
        </Grid>
        </main>

    )};

export default Products;