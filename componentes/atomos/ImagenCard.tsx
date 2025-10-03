interface TextoCardProps {
    src : string
}

const ImgCard : React.FC<TextoCardProps> = ({src}) => {
    return (
        <img src={src}></img>
    )
}

export default ImgCard