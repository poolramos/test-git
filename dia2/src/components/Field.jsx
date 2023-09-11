import React from 'react'

function Field(props) {
  return (
    <>
    
    {
        props.lista.map((e)=> {
            return <div><p>{e}</p><input type="text"></input></div>
        })
    }

    </>
  )
}

export default Field