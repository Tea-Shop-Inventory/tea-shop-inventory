import React from 'react';
import {Grid} from '@material-ui/core';
import Tea from './Tea/Tea';
import useStyles from './styles'

const products = [
    {id: 1, name: 'Black Tea', description: '30g of loose leaf black tea', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4804_590x.jpg?v=1633806435' },
    {id: 2, name: 'Green Tea', description: '30g of loose leaf Green tea', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4865_356ff9c4-dd36-4c07-b8d3-37018f16765d_295x.jpg?v=1634418464'},
    {id: 3, name: 'White Tea', description: '30g of loose leaf White tea', price: '18.00', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4184_1772x.jpg?v=1632189483'},
    {id: 4, name: 'Oolong Tea', description: '30g of loose leaf Oolong tea', price: '12.50', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4787_1200x.jpg?v=1633804161'},
    {id: 5, name: 'Matcha', description: '35g of Powdered Green Tea Leaves', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/Matcha2_590x.jpg?v=1591023909'},
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