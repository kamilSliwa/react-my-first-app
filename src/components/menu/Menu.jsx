import { Link, Outlet } from "react-router-dom";

import React from "react";

export default function Menu() {
  return (
    <div className='menu'>
      <Link to='/'>Home</Link>
    </div>
  );
}
