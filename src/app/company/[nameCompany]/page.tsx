import React from 'react'
interface Company{
    nameCompany: string;
}
interface Props{
    params: Company;
}
export default function page(props: any) {
    const {params} = props;
  return (
    <div>
        <p>Company name: <b>{params.nameCompany}</b></p>
    </div>
  )
}
