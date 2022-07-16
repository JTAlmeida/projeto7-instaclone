const ionIcon = [
  "home",
  "search-outline",
  "add-circle-outline",
  "heart-outline",
  "person-outline",
];

function Fundomobile() {
  return (
    <div class="fundo-mobile">
      {ionIcon.map((ionicon) => (
        <ion-icon name={ionicon}></ion-icon>
      ))}
    </div>
  );
}

export default Fundomobile;