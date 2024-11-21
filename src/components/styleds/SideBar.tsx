import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5; /* Fundo claro */
  border-left: 1px solid #dcdcdc;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra leve */
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h1`
  margin-bottom: 15px;
  color: #333;
  font-size: 20px;
`;

const TrendingList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 15px;
    line-height: 1.5;

    &:hover {
      background-color: #e6ecf0;
      border-radius: 8px;
      padding: 8px;
      cursor: pointer;
    }
  }
`;

const TrendingLabel = styled.p`
  font-size: 14px;
  color: #555;
`;

const TrendingTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ShowMoreLink = styled.a`
  display: block;
  margin-top: 15px;
  text-align: left;
  color: #1d9bf0;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer id="right-side-card">
      <SectionTitle>O que está acontecendo?</SectionTitle>
      <TrendingList>
        <li>
          <TrendingLabel>Esportes - Há 45 min</TrendingLabel>
          <TrendingTitle>Assunto sobre esportes</TrendingTitle>
        </li>
        <li>
          <TrendingLabel>Assunto do Momento em Brasil</TrendingLabel>
          <TrendingTitle>Assunto do Momento</TrendingTitle>
        </li>
        <li>
          <TrendingLabel>Música - Assunto do Momento</TrendingLabel>
          <TrendingTitle>Assunto sobre Música</TrendingTitle>
        </li>
        <li>
          <TrendingLabel>Cinema - Assunto do Momento</TrendingLabel>
          <TrendingTitle>Assunto sobre Filmes e Cinema</TrendingTitle>
        </li>
      </TrendingList>
      <ShowMoreLink href="#">Mostrar mais</ShowMoreLink>
    </SidebarContainer>
  );
}

export default Sidebar;
