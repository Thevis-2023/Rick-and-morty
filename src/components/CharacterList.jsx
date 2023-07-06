import React from 'react'
import { useEffect, useState } from 'react'
import Character from './Character'
import BtnPaginas from './Btn'


const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json();
            setLoading(false)
            setCharacters(data.results);
        }
        fetchData();
    }, [page]);

    return (
        <div className='container'>
            <BtnPaginas page={page} setPage={setPage} />
            {loading ?
                <h1 className='text-center display-1 py-5'>Loading...</h1> :
                <div className='row'>
                    {characters.map((character) => {
                        return (
                            <div className='col-md-4 mb-5' key={character.id}>
                                <Character character={character} />
                            </div>
                        )
                    })
                    }
                </div>
            }
            <div className='p-5'>
                <BtnPaginas page={page} setPage={setPage} />
            </div>
        </div>
    )
}

export default CharacterList