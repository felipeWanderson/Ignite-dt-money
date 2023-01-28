import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImag from '../../assets/logo.svg'
export function Header () {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImag} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}