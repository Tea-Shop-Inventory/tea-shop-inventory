import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons'
import assets from '../../assets/assets';

import useStyles from './styles.js';
import mockLogo from '../../assets/mockLogo.jpg'

 
const Navbar = () => {
    const classes = useStyles()
    return (
        <>

            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={mockLogo} alt='Tea' height='25px' className={classes.image}/>
                        
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton arialabel='show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>


                    </div>
                </Toolbar>


            </AppBar>
            
        </>
    )
}

export default Navbar
