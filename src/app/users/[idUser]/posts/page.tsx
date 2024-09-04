import React from 'react'
interface User{
    idUser: string
}
interface Props{
    params: User;
}
export default function page(props: any) {
    const {params} = props;
  return (
    <div>
        <p>Danh sách bải viết của User Id: <b>{params.idUser}</b></p>
    </div>
  )
}
