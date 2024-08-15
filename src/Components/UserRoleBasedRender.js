import React from 'react';
import ProductDescription from './ProductDescription';
import AdminProductDescription from './AdminProductDescription';
import { useSelector } from 'react-redux';

function UserRoleBasedRender() {
    const user = useSelector( state => state.loggedUser );
    console.log("Inside User Router:-");
    console.log(user);
  return (
    (user.role === 'admin') ? <AdminProductDescription /> : <ProductDescription />
  )
}

export default UserRoleBasedRender
