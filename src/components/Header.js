import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function Header() {

  const { amount } = useSelector((store) => store.cart)

  return (
    <div className='w-full fixed top-0 z-10 bg-orange-400 px-6 py-3 flex place-items-center text-white'>
    <h1 className='font-bold text-xl mr-6'>FakeShop</h1>
    <div className='w-full h-full flex place-content-end '>
    <Link to="cart">
    <Badge badgeContent={amount} color="info" className='place-items-end'>
      <ShoppingCartOutlinedIcon color="black" fontSize='medium' />

    </Badge>
    </Link>
    
    </div>
    </div>
    
  );
}