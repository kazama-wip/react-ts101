import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import '../App.css'


//const titleStyle = { color: 'red', fontSize: 20 };
type TitleProps = {
  blue?: boolean
}
const Title = styled.h1<TitleProps>`
  color: red;

  ${({ blue }) => blue ? css`color:blue;` : ''
  }
`

const StyledComponent: React.FC = () => {

  const [blue, setBlue] = useState(false)
  return (
    <div>
      <Title
        blue={blue}
        onClick={() => { setBlue(!blue) }} > React styled Component</Title>
    </div>
  );
}

export default StyledComponent;