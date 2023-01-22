import { FormContainer, InputContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <InputContainer>
        <input type="text" placeholder="CEP" />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="Rua" />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="UF" />
      </InputContainer>
    </FormContainer>
  )
}
