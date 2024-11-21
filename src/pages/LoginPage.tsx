import { Container } from "../components/styleds/ContainerLogin";

export function Login() {
  return (
    <Container>
      <div className="container">
        <div className="container1">
          <h1>Growtwitter</h1>
          <p>Trabalho final do bloco intermediário</p> <br />
          <p>
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </div>
        <div className="container2">
          <form>
            <h2>Entrar no GrowTwitter</h2>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
