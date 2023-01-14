import styled from 'styled-components'

export const CoffeeQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 72px;
  height: 38px;
  background: ${(props) => props.theme.base['base-button']};
  gap: 8px;

  & > button {
    width: 14px;
    height: 14px;
    background: none;
    color: ${(props) => props.theme.products['purple']};
    cursor: pointer;
  }
`
