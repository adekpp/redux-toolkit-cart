import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "./Search";

export default function Header({ products }) {
  const { amount } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  return (
    <div className="w-full sticky z-10 top-0 bg-orange-400 px-6 py-3 flex place-items-center text-white drop-shadow-md">
      <h1
        onClick={() => navigate("/")}
        className="hidden md:block font-bold text-3xl tracking-tighter mr-6 cursor-pointer "
      >
        FakeShop
      </h1>
      <Search data={products} />
      <div className="w-full h-full flex place-content-end ">
        <Link to="cart">
          <Badge badgeContent={amount} color="info" className="place-items-end">
            <ShoppingCartOutlinedIcon color="black" fontSize="medium" />
          </Badge>
        </Link>
      </div>
    </div>
  );
}
