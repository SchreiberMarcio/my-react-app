import styled from "styled-components";
import { Navbar } from "../components/styleds/NavBar";
import { Feed } from './../components/styleds/Feed';
import { Sidebar } from './../components/styleds/SideBar';

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: first baseline;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #e6ecf0;
`;

export function Explore() {
  return (
    <PageContainer>
      <Navbar />
      <Feed />
      <Sidebar />
    </PageContainer>
  );
}

export default Explore;
