import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center flex justify-center my-5 gap-5'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href='#'>
                        
                        قبلی
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'bg-yellow-400' : ''} , border rounded-full px-2 `} >
                        <a onClick={() => setCurrentPage(pgNumber)}    className='page-link'  href='#'> {pgNumber}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link"  onClick={nextPage} href='#'>بعدی</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination