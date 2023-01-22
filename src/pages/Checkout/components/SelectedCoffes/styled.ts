import styled from 'styled-components'

export const Coffes = styled.div`
  display: flex;
  padding: 8px 4px;
  width: 368px;
  height: 80px;
  & > span {
    display: flex;
    width: 55px;
    height: 21px;
    font-weight: 700;
    font-size: 16px;
    margin-left: 50px;
    color: ${(props) => props.theme.base['base-text']};
  }
  & > div {
    gap: 20px;
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: 255px;
    height: 64px;
    & img {
      height: 64px;
      width: 64px;
    }
    & section:nth-child(1) {
      display: flex;
      margin-bottom: 8px;
      font-size: 16px;
      color: ${(props) => props.theme.base['base-subtitle']};
    }
    & section:nth-child(2) {
      gap: 8px;
      display: flex;
      align-items: center;
      & > div {
        display: flex;
        width: 72px;
        height: 32px;
        background: none;
        cursor: pointer;
        background: ${(props) => props.theme.base['base-button']};
      }
      & > button {
        display: flex;
        align-items: center;
        height: 32px;
        width: 91px;
        gap: 3px;
        border-radius: 6px;
        cursor: pointer;
        text-transform: uppercase;
        padding: 0px 8px 0px 8px;
        background: ${(props) => props.theme.base['base-button']};
        & svg {
          height: 16px;
          width: 16px;
          left: 8px;
          top: 8px;
          border-radius: 0px;
          color: ${(props) => props.theme.products['purple']};
        }
      }
    }
  }
`

export const HrCoffeeDivider = styled.div`
  width: 368px;
  height: 0px;
  border: 1px solid ${(props) => props.theme.base['base-button']};
  margin-top: 24px;
  margin-bottom: 24px;
`
