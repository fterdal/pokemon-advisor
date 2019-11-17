import React from "react"

const SingleType = ({ typeName, typeData }) => {
  return (
    <>
      <h2>{typeName}</h2>
      <div>{JSON.stringify(typeData)}</div>
    </>
  )
}

export default SingleType
