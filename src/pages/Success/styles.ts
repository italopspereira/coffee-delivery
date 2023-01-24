import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 0 160px;
  display: flex;
`

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  & h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme.products['yellow-dark']};
  }
  & p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
`

export const OrderSuccessAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 270px;
  width: 526px;
  border-radius: 6px 36px;
  margin-top: 40px;
  border: 1px solid ${(props) => props.theme.products['purple']};
`

export const OrderSuccessImage = styled.div`
  display: flex;
  height: 293px;
  width: 492px;
  margin-top: 180px;
  margin-left: 120px;
  border-radius: 0px;
`
