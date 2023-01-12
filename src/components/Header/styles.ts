import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14;
  line-height: 14.2px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 193px;
    height: 38px;

    & div {
      background: ${(props) => props.theme.products['purple-light']};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      width: 143px;
      height: 38px;
      border-radius: 6px;
      color: ${(props) => props.theme.products['purple']};

      & span {
      }
      & svg {
        font-size: 2rem;
      }
      & path {
        fill: ${(props) => props.theme.products['purple']};
        stroke: none;
      }
    }

    & a {
      background: ${(props) => props.theme.products['yellow-light']};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 6px;
      gap: 4px;
      width: 38px;
      height: 38px;

      & svg {
        color: ${(props) => props.theme.products['yellow-dark']};
        width: 18.56px;
        height: 17.88px;
        top: 1.38px;
        left: 0.69px;
      }
    }
  }
`
