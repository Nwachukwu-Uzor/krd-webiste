import styles from './Pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
  <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <p onClick={() => paginate(number)} className={`${styles.pagination__link} ${number === currentPage && styles.active}`}>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
