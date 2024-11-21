
import styled from "styled-components";
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #f7f9fa;

`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;
  }

  a:hover {
    color: #1d9bf0;
  }
`;

const TweetButton = styled.button`
  margin-top: 20px;
  background-color: #1d9bf0;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #1a8cd8;
  }
`;

export function Navbar () {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <Link to="/"> # Página Inicial</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/explore"> # Explorar</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/profile">Perfil</Link>
        </MenuItem>
      </MenuList>
      <TweetButton>Tweetar</TweetButton>
    </MenuContainer>
  );
};

export default Navbar;
