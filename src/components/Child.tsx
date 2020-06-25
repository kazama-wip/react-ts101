import React from 'react';

type Props = {
  message: string
  children: React.ReactNode
}
const Child: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Child Component- {props.message}- {props.children} </p>
    </div>
  )
}

export default Child;