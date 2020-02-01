import React, {useState, useEffect} from 'react';
import { fetchCompanies } from './api';

const Following = ({ followingCompanies }) => {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    const results = await fetchCompanies()

    const filtered = followingCompanies.map(company => {
      return results.data.find(result => {
        return result.id === company.companyId;
      })
    })
    setCompanies(filtered); //not setting the companies
  }


  useEffect(() => {
    if (companies.length === 0) {
      getCompanies();
    }  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[companies])


  return (
    <div className="following">
      <h2>Companies you are following:</h2>
      <ul>
        {companies.map((company, idx) => {
          return <li key={idx}><h4>{company.name}</h4>
            <p>{company.phone}</p>
            <p>{company.state}</p>
            <p>{company.catchPhrase}</p>
          </li>
        })}
        </ul>
    </div>
  )
}

export default Following;