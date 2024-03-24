import './Filters.css'
import {  useTask } from '../../hooks/useTasks.js'
import { useState } from 'react'

export function Filters(){
  const { setFilterType } = useTask()

  const [filter, setFilter] = useState('All')

  const handleFilterChange = (filter) => {
      setFilterType(filter)
      setFilter(filter)
    }
    
  return (
      <ul className="filters">
        <li>
          <input
            className='tab'
            type="radio"
            name="filter"
            id="all"
            checked={filter==='all'}
            onChange={() => handleFilterChange('all')}
          />
          <label htmlFor="all">All</label>
        </li>
        <li>
          <input
            className='tab'
            type="radio"
            name="filter"
            id="completed"
            checked={filter==='completed'}
            onChange={() => handleFilterChange('completed')}
          />
          <label htmlFor="completed">Completed</label>
        </li>
        <li>
          <input
            className='tab'
            type="radio"
            name="filter"
            id="pending"
            checked={filter==='pending'}
            onChange={() => handleFilterChange('pending')}
          />
          <label htmlFor="pending">Pending</label>
        </li>
        <span className="glider"/>
      </ul>
  );
}