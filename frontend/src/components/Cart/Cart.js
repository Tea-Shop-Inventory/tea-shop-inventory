import React from 'react'
import {Container, Button, Grid, Typography} from '@material-ui/core'
import useStyles from './styles';

const Cart = () => {
    // const classes = useStyles();
    // const isEmpty = true;
    // const EmptyCart = () => (
    //     <Typography variant='subtitle1'>Shopping Cart Empty</Typography>

    // )

    // const FilledCart = () => (
    //     <>
    //         <Grid container spacing={3}>

    //         </Grid>
    //     </>
    // )

    return (
        <Container>
            {/* <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'>Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>} */}

            <div>
                Shopping Cart is Empty
            </div>

            
        </Container>
    )
}

export default Cart
