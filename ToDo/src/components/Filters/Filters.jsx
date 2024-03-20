import './Filters.css'

export function Filters({ filterHandler }){
    const handleFilterChange = (filterType) => {
        filterHandler(filterType);
      };
    return (
        <ul className="filters">
          <li>
            <input
              type="radio"
              name="filter"
              id="all"
              onChange={() => handleFilterChange('all')}
            />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input
              type="radio"
              name="filter"
              id="completed"
              onChange={() => handleFilterChange('completed')}
            />
            <label htmlFor="completed">Completed</label>
          </li>
          <li>
            <input
              type="radio"
              name="filter"
              id="pending"
              onChange={() => handleFilterChange('pending')}
            />
            <label htmlFor="pending">Pending</label>
          </li>
        </ul>
    );
}