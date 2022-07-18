export default function Sidebarusuario() {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <Usuario username = "catanacomics" name = "Catana"/>
    </div>
  );
}

function Usuario(props){
  return (
    <div class="texto">
          <strong>{props.username}</strong>
          {props.name}
        </div>
  )
}