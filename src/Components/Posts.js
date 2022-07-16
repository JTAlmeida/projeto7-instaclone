import React from "react";

const post = [
  {
    userImg: "assets/img/meowed.svg",
    username: "meowed",
    img: "assets/img/gato-telefone.svg",
    imgLike: "assets/img/respondeai.svg",
    usernameLike: "respondeai",
    totalLikes: "101.523",
  },
  {
    userImg: "assets/img/barked.svg",
    username: "barked",
    img: "assets/img/dog.svg",
    imgLike: "assets/img/adorable_animals.svg",
    usernameLike: "adorable_animals",
    totalLikes: "99.159",
  },
];



function Posts() {
  const [like, setLike] = React.useState("heart-outline");

  return (
    <div class="posts">
      {post.map((post) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={post.userImg} />
              {post.username}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={post.img} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div class="like">
                <ion-icon name={like} 
                onClick={() => {
                  if(like==="heart-outline"){
                    setLike("heart");
                  } else {
                    setLike("heart-outline");
                  }
                }}>
                </ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={post.imgLike} />
              <div class="texto">
                Curtido por <strong>{post.usernameLike}</strong> e{" "}
                <strong>outras {post.totalLikes} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;