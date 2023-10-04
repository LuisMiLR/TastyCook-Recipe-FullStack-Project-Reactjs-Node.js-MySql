import styles from './Search.module.scss';

function Search(setFilter) {
    function handleInput(e) {
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase());
      }

    return (
        <div
          className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
        >
          <i className={`fa-solid fa-magnifying-glass ml-10 mr-15 mt-9 ${styles.glasses}`}></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>
    )
}

export default Search;