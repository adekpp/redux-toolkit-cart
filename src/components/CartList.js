import React from "react";

export const CartList = ({ children }) => {
  return (
    <div className="flex flex-col md:w-2/3 mx-auto">
      <table className="table-fixed">
        <thead>
          <tr>
            <th>
              <p>Product</p>
            </th>
            <th>
              <p className="mx-7">Quantity</p>
            </th>
            <th>
              <p className="mx-7">Price</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="px-5">{"\u00A0"}</p>
            </td>
            <td className="px-5 text-center">{"\u00A0"}</td>
            <td className="px-5 text-center">{"\u00A0"}</td>
          </tr>

          {children}
        </tbody>
      </table>
    </div>
  );
};
