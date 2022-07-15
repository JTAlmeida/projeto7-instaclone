const usuario = [{ username: "catanacomis", name: "Catana" }];

function Sidebarusuario() {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      {usuario.map((usuario) => (
        <div class="texto">
          <strong>{usuario.username}</strong>
          {usuario.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebarusuario;
