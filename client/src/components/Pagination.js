import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if(pageNumbers.length > 1) {

    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <p onClick={() => paginate(number)} className='page-link'>
                {number}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    );

  } else {
    return (
      <br/>
    ) 
  }


};

export default Pagination;
