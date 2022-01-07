import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import assets from '../../assets/assets';

import useStyles from './styles.js';
import Logo from '../../assets/logo2.png'

 
const Navbar = () => {
    const classes = useStyles()
    const location = useLocation();

    if(location.pathname)
    return (
        <>

            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={Logo} alt='Tea' height='25px' className={classes.image}/>
                        Tea Shop
                    </Typography>

                    <Typography variant='caption' className={classes.log} color='inherit'>
                        Log In  
                    </Typography>

                    <Typography variant='caption' className={classes.sign} color='inherit'>
                        Sign up 
                    </Typography>




                    <div className={classes.grow}/>
                    {location.pathname == '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' arialabel='show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>


                    </div>)}
                </Toolbar>


            </AppBar>
            
        </>
    )
}

export default Navbar
