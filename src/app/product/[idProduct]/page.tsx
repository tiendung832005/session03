"use client";
import React from 'react'
interface Product{
    idProduct: string;
}
interface Props{
    params: Product;
}
/*
    component trong nextJs có 2 loại:
    1: client component
        - Chạy dc ở môi trường trình duyệt
    2: server component
        - Chạy dc ở môi trường server
    mặc định khi tạo function thì nó mặc định là server component
*/
export default function page(props:any) {
    console.log("giá trị props: ", props);
    const {params} = props;
  return (
    <div>trang chi tiết sản phẩm
        id sản phẩm là: {params.idProduct}
    </div>
  )
}
