function Posts() {
    return (
        <div class="posts">
            <Post 
            userImg="assets/img/meowed.svg" 
            username="meowed" 
            img="assets/img/gato-telefone.svg" 
            imgLike="assets/img/respondeai.svg" 
            usernameLike="respondeai" 
            totalLikes="101.523" />

            <Post 
            userImg="assets/img/barked.svg" 
            username="barked" 
            img="assets/img/dog.svg" 
            imgLike="assets/img/adorable_animals.svg" 
            usernameLike="adorable_animals" 
            totalLikes="99.159" />
        </div>
    )
}

function Post(props) {
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
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
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
                        Curtido por <strong>{props.usernameLike}</strong> e <strong>outras {props.totalLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Posts;