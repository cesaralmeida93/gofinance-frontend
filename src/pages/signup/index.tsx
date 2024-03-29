import { Container, Content } from "../../styles/signup/signup.styles";
import Image from "next/image";
import logo from "../../assets/logo.png"
import Link from "next/link";

const SignUp = () => (
  <Container>
    <Content>
      <Image src={logo} alt="GoFinance" width={150} />
      <input type="text" placeholder="Nome de usuário" />
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Repetir Senha"/>
      <button>Cadastrar</button>
      <p>Já possui uma conta? <Link href="/signin">Entre!</Link></p>
    </Content>
  </Container>
)

export default SignUp;