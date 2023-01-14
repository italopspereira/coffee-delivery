import styled from 'styled-components'

export const CoffeesContainer = styled.div`
  display: flex;
  position: absolute;
  height: 1645px;
  top: 648px;
  padding: 128px 160px;
  & > h2 {
    position: absolute;
    height: 42px;
    width: 193px;
    left: 160px;
    top: 32px;
    border-radius: nullpx;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }
`

export const CoffeesList = styled.div`
  position: absolute;
  width: 1120px;
  top: 128px;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 0 20px;
  width: 256px;
  height: 310px;
  left: 0px;
  top: 0px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.base['base-card']};
  & img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 12px;
  }
`

export const CoffeeTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  & span {
    height: 21px;
    width: 81px;
    left: 0px;
    top: 0px;
    border-radius: 100px;
    padding: 4px 8px 4px 8px;
    background: ${(props) => props.theme.products['yellow-light']};
    color: ${(props) => props.theme.products['yellow-dark']};
  }
`

export const CoffeeDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 16px;

  & h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-subtitle']};
    margin-bottom: 8px;
  }
  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-label']};
  }
`

export const CoffeSale = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 38px;
  left: 24px;
  right: 24px;
  bottom: 20px;
  height: 38px;
  width: 208px;
  left: 24px;
  top: 252px;
  border-radius: 0px;
  justify-content: space-between;

  & > p {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.base['base-text']};
    & span {
      font-weight: 800;
      font-size: 24px;
      font-family: 'Baloo 2', sans-serif;
      line-height: 31.2px;
    }
  }
  & > button {
    cursor: pointer;
  }
  & > button svg {
    color: white;
    width: 38px;
    height: 38px;
    padding: 8px;
    gap: 8px;
    border-radius: 6px;
    background: ${(props) => props.theme.products['purple-dark']};
  }
`
