import styled from 'styled-components'
export const PresentationContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 544px;
  top: 104px;
  left: 0px;
  right: 0px;
  padding: 0 160px;
  background: url('./src/assets/Background.svg');
  background-size: 100%;

  & > div {
    position: absolute;
    width: 588px;
    & h1 {
      color: ${(props) => props.theme.base['base-title']};
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
    }
    & p {
      color: ${(props) => props.theme.base['base-subtitle']};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      margin-top: 16px;
    }
  }
  section {
    position: absolute;
    width: 476px;
    height: 360px;
    left: calc(50% - 476px / 2 + 322px);
    top: calc(50% - 360px / 2);
  }
`

export const Benefits = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 40px;

  & > div {
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    min-width: 290px;

    & span {
      color: ${(props) => props.theme.base['base-text']};
      margin-left: 12px;
    }
    & svg {
      color: ${(props) => props.theme.base['white']};
      background-color: ${(props) => props.theme.products['yellow-dark']};
      height: 32px;
      width: 32px;
      left: 0px;
      top: 0px;
      border-radius: 1000px;
      padding: 8px;
    }
  }
  & > div:nth-child(2) svg {
    background-color: ${(props) => props.theme.base['base-text']};
  }
  & > div:nth-child(3) svg {
    background-color: ${(props) => props.theme.products['yellow']};
  }
  & > div:nth-child(4) svg {
    background-color: ${(props) => props.theme.products['purple']};
  }
`
