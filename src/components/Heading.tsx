import React from 'react'
interface propsT {
    title : string 
}
const Headings : React.FC<propsT> = ({title}) => {
  return (
    <div style={{textAlign:'center',paddingBottom:'46px',fontSize:'24px'}}>
        <p style={{borderColor:'white',paddingBottom:'2px',}}>{title}</p>

    </div>
  )
}

export default Headings
