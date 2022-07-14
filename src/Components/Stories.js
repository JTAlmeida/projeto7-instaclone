function Stories() {
    return (
        <div class="stories">
            <Story img="assets/img/9gag.svg" name="9gag" />
            <Story img="assets/img/meowed.svg" name="meowed" />
            <Story img="assets/img/barked.svg" name="barked" />
            <Story img="assets/img/nathanwpylestrangeplanet.svg" name="nathanwpylestrangeplanet" />
            <Story img="assets/img/wawawicomics.svg" name="wawawicomics" />
            <Story img="assets/img/respondeai.svg" name="respondeai" />
            <Story img="assets/img/filomoderna.svg" name="filomoderna" />
            <Story img="assets/img/memeriagourmet.svg" name="memeriagourmet" />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}
export default Stories;