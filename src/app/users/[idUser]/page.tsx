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
        <b>User Id: {params.idUser}</b>
    </div>
  )
}
