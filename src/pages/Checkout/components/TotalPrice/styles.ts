import styled from 'styled-components'

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & > div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${(props) => props.theme.base['base-text']};
  }
  & > div:nth-child(3) {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
`
