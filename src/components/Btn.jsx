import React from 'react'

const BtnPaginas = (props) => {
    return (
        <nav>
            <h5 className='text-center'>Page: {props.page}</h5>
            <ul className='pagination justify-content-center'>
                <li className='page-item'>
                    <button className='page-link' onClick={() => props.setPage(props.page - 1)}>Prev</button>
                </li>
                <li className='page-item'>
                    <button className='page-link' onClick={() => props.setPage(props.page + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    )
}


export default BtnPaginas