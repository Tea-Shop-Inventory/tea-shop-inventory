import React, { useState, useEffect} from "react";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Divider} from '@material-ui/core'
import { AddShoppingCart }from '@material-ui/icons'
import useStyles from './styles'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
  addToCart,
} from "../../../Redux/Shopping/shopping-actions";
import Cart from "../Cart";


// const ProductSize = styled.span``;

// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
  
// `;

// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
  
// `;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const Summary = styled.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;

// const SummaryTitle = styled.h1`
//   font-weight: 200;
// `;

// const SummaryItem = styled.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   // font-weight: ${(props) => props.type === "total" && "500"};
//   // font-size: ${(props) => props.type === "total" && "24px"};
// `;

// const SummaryItemText = styled.span``;

// const SummaryItemPrice = styled.span``;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;







const CartItem = ({ cart, item, adjustQty, removeFromCart, addToCart }) => {

  const [input, setInput] = useState(item.qty);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    // cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    // });

    setTotalItems(items);
    setTotalPrice(price.toFixed(2));
  }, [item, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // let totalPrice = item.qty * item.price


  const classes = useStyles();
    
    return (
      
              
      <div className={classes.wrapper}>
        <Box sx={{ flexDirection: 'row' , justifyContent: 'space-evenly' , alignItems: 'center', }} className={classes.product}>
            <img src={item.image} className={classes.media}/>
                       
                <span className={classes.name} >
                  {item.name}
                </span>


                <div className={classes.price}>
                ${item.price}
                </div>
            
                          
                   
            <Box  className={classes.edge} >
              <span className={classes.row}>
                <button onClick={() => removeFromCart(item.id)} type="button" size="small" className={classes.col}>-</button>
                <div className={classes.col}> {totalItems} </div>
                <button onClick={() => addToCart(item.id)} type="button" size="small" className={classes.col}>+</button>
              </span>
              <div className={classes.total}>{totalPrice}</div>
            </Box>
                   
            <hr />
                   
        </Box>        
      </div>
              
     
      
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);


