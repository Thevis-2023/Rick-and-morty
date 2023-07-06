
const Character = ({ character }) => {
    return (
        <div className="text-center card" style={{ minWidth: "200px" }}>
            <img src={character.image} alt={character.name} />
            <div className="card.body">
                <h4 className="card-title text-center">{character.name}</h4>
                <hr />
                <h5>Estado del personaje: {character.status}</h5>
                <h5>Especie del personaje: {character.species}</h5>
                <h5>Genero: {character.gender}</h5>
                <h5>Lugar: {character.origin.name}</h5>
            </div>
        </div>
    )
}

export default Character