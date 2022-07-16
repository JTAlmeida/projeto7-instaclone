import React from "react";

const postInfo = [
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

  return (
    <div class="posts">
      {postInfo.map((postInfo) => (
        <Post
          userImg={postInfo.userImg}
          username={postInfo.username}
          img={postInfo.img}
          imgLike={postInfo.imgLike}
          usernameLike={postInfo.usernameLike}
          totalLikes={postInfo.totalLikes}
        />
      ))}
    </div>
  );
}

function Post(props) {
  const [like, setLike] = React.useState("heart-outline");

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImg} />
          {props.username}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.img} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div class="like">
            <ion-icon
              name={like}
              onClick={() => {
                if (like === "heart-outline") {
                  setLike("heart");
                } else {
                  setLike("heart-outline");
                }
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgLike} />
          <div class="texto">
            Curtido por <strong>{props.usernameLike}</strong> e{" "}
            <strong>outras {props.totalLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
