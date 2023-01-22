import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div:nth-child(2) {
    & > input {
      height: 42px;
      width: 560px;
    }
  }
  & > div:nth-child(3) {
    gap: 12px;
    & > input:nth-child(2) {
      width: 348px;
    }
  }
  & > div:nth-child(4) {
    gap: 12px;
    & > input:nth-child(2) {
      width: 276px;
    }
    & > input:nth-child(3) {
      width: 60px;
    }
  }
`
export const InputContainer = styled.div`
  display: flex;
  & > input {
    width: 200px;
    height: 42px;
    border-radius: 4px;
    padding: 12px;
    background: ${(props) => props.theme.base['base-input']};
    border: 1px solid ${(props) => props.theme.base['base-button']};
  }
`
