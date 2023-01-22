import styled from 'styled-components'

export const PaymentTitle = styled.div`
  display: flex;
  margin-bottom: 32px;
  & > svg {
    color: ${(props) => props.theme.products['purple']};
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    & > label {
      color: ${(props) => props.theme.base['base-subtitle']};
      font-size: 16px;
    }
    & > span {
      color: ${(props) => props.theme.base['base-text']};
      font-size: 14px;
    }
  }
`
export const PaymentMethodButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 560px;
  height: 51px;
  & > button {
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
    border-radius: 6px;
    width: 178.67px;
    height: 51px;
    background: ${(props) => props.theme.base['base-button']};
    text-transform: uppercase;
  }
  & svg {
    color: ${(props) => props.theme.products['purple']};
  }
`
