interface TituloProps {
  texto: string;
}




const Titulo : React.FC<TituloProps> = ({ texto }) => {
    return (
        <h1
        style={{
            fontSize : '30px',
            fontWeight : 700,
            marginInline : 'auto'
        }} >{texto}</h1>
    )
}

export default Titulo