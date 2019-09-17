import React, { Component } from "react";
import { Link } from "../routes";
import { Card, Menu, Label } from "semantic-ui-react";
import { Form, Button, Message, Input } from "semantic-ui-react";

import { addToCart } from '../repository';


const StockProductItems = props => {
  let items = [];
  const { stockProducts } = props;

  for (let i = 0; i < stockProducts.length; i++)
    items.push({
      header: stockProducts[i].name, //stockProducts[i].id,
      meta: (
        <div>
          <Menu compact style={{ marginTop: "5px" }} >
            <Menu.Item> Product Id
              <Label color="teal" > {stockProducts[i].id} </Label>
            </Menu.Item>
              <Menu.Item> Avaialable Quantity
              <Label color="teal" > {stockProducts[i].available_quantity} </Label>
            </Menu.Item>
            <Menu.Item> Price
              < Label color="teal" > {stockProducts[i].price} </Label>
            </Menu.Item >
            <Menu.Item><button className="btn-cart" onClick={() => addToCart(stockProducts[i].id)}>Add to Cart</button></Menu.Item>
                      </Menu>
        </div >
                    ),
                    fluid: true
                  });
  return <Card.Group items={items} />;
                    };
                    
                    export default StockProductItems;
