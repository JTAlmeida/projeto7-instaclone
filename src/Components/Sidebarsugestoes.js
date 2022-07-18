const sugestao = [
  {
    img: "assets/img/bad.vibes.memes.svg",
    nome: "bad.vibes.memes",
    razao: "Segue você",
  },
  { img: "assets/img/chibirdart.svg",
    nome: "chibirdart", 
    razao: "Segue você" },
  {
    img: "assets/img/razoesparaacreditar.svg",
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram",
  },
  {
    img: "assets/img/adorable_animals.svg",
    nome: "adorable_animals",
    razao: "Segue você",
  },
  {
    img: "assets/img/smallcutecats.svg",
    nome: "smallcutecats",
    razao: "Segue você",
  },
];

export default function Sidebarsugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      
      {sugestao.map((sugestao) => (
        <Sugestao img = {sugestao.img} nome = {sugestao.nome} razao = {sugestao.razao} />
      ))}
      
    </div>
  );
}

function Sugestao(props){
  return (
    <div class="sugestao">
          <div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <div class="nome">{props.nome}</div>
              <div class="razao">{props.razao}</div>
            </div>
          </div>
          <div class="seguir">Seguir</div>
        </div>
  )
}