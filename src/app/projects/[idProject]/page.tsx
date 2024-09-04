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
        <b>Trang chi tiết dự án có Id: {params.idProject}</b>
    </div>
  )
}
