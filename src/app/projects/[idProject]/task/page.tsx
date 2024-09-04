import React from 'react'
interface Project{
    idProject: string
}
interface Props{
    params: Project;
}
export default function page(props: any) {
    const {params} = props;
  return (
    <div>
        <p>Danh sách nhiệm vụ của dự án có Id: <b>{params.idProject}</b></p>
    </div>
  )
}
