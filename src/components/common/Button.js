import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const largeStyle = ({ large }) => {
  if(large) {
    return css`
    padding: 10px;
    font-size: 1.5em;
    border-radius: 5px;
  `
  } else {
    return css` 
    padding: 8px;
    font-size: 1em;
    border-radius: 4px;
  `
  }
}

const Button = styled.button`
  color: white;
  background: ${p => p.secondary ? p => p.theme.secondaryColor : p => p.theme.primaryColor};
  font-weight: bold;
  ${largeStyle};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool
}

export { Button }
