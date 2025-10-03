interface ParrafoProps {
  texto: string;
}

const Parrafo : React.FC<ParrafoProps> = ({ texto }) => {
    return (
        <p style={{
      margin: "12px 0 0",
      fontSize: "20px",
      lineHeight: 1.6,
      maxWidth: "60ch",     // no se estira de lado a lado
      marginInline: "auto", // centra el bloque

        }}>{texto}</p>
    )
}

export default Parrafo