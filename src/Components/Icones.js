const icones = [
  "paper-plane-outline",
  "compass-outline",
  "heart-outline",
  "person-outline",
];
function Icones() {
  return (
    <div class="icones">
      {icones.map((icones) => (
        <ion-icon name={icones}></ion-icon>
      ))}
    </div>
  );
}

export default Icones;
