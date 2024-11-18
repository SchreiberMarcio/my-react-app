


export function Login () {
    return (
      <>
        <div className="login-container">
          <div className="info-section">
            <h1>Growtwitter</h1>
            <p className="subtitle">Trabalho final do bloco intermediário</p>
            <p className="description">
              O Growtwitter é a plataforma definitiva para todos os apaixonados
              por redes sociais que buscam uma experiência familiar e poderosa,
              semelhante ao Twitter, mas com um toque único. Seja parte desta
              comunidade que valoriza a liberdade de expressão, a conexão com
              pessoas de todo o mundo e a disseminação de ideias.
            </p>
          </div>
          <div className="login-section">
            <h2>Entrar no Growtwitter</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Digite seu username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                />
              </div>
              <button type="submit" className="btn-submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </>
    );

}

export default Login;