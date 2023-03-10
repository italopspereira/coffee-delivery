import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 0 160px;
  height: 100vh;
  margin-top: 40px;
`
export const CheckoutCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & p {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    margin-bottom: 15px;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
`
export const CheckoutInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  border-radius: 0px;
  & > div {
    padding: 40px;
  }
`
export const CheckoutAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 640px;
  height: 372px;
  background: ${(props) => props.theme.base['base-card']};
`
export const PaymentMethod = styled.div`
  width: 640px;
  height: 207px;
  margin-top: 12px;
  gap: 32px;
  border-radius: 6px;
  background: ${(props) => props.theme.base['base-card']};
`
export const CoffeesSelect = styled.div`
  width: 448px;
  & > div {
    padding: 40px;
  }
`
export const CoffeesSelectCard = styled.div`
  width: 448px;
  height: 498px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.base['base-card']};
`
export const AddressTitle = styled.div`
  display: flex;
  & > svg {
    color: ${(props) => props.theme.products['yellow-dark']};
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

export const SubmitButton = styled.button`
  padding: 12px 8px;
  gap: 4px;
  width: 368px;
  height: 46px;
  margin-top: 24px;
  background: ${(props) => props.theme.products['yellow']};
  color: ${(props) => props.theme.base['white']};
  cursor: pointer;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
`
