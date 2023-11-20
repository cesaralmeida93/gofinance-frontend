import { Container, Content } from "./styles";
import Image from "next/image";
import logo from "../../assets/logo.png"
import Link from "next/link";

const SignIn = () => (
  <Container>
    <Content>
      <Image src={logo} alt="GoFinance" width={150} />
      <input type="text" placeholder="Nome de usuário" />
      <input type="password" placeholder="Senha"/>
      <button>Entrar</button>
      <p>Ainda não possui uma conta? <Link href="/signup">Cadastre-se!</Link></p>
    </Content>
  </Container>
)

export default SignIn;