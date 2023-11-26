import { Container } from "./styles";
import Image from "next/image";

import searchIcon from "../../assets/search.png";
const SearchBar = () => (
  <Container>
    <input type="search" placeholder="pesquisar" />
    <Image src={searchIcon} alt="/" width={12} />
  </Container>

);

export default SearchBar;