import React from 'react'
import CollegeDisplay from './CollegeDisplay'

const College = () => {
  const CollegeData = [
    {
      name: 'GCU',
      City: 'Lahore',
      website: 'www.gcu.pk',
      students: [
        {
          id: 1,
          name: 'arfa',
        },
        {
          id: 2,
          name: 'aniq',
        },
        {
          id: 3,
          name: 'supari',
        }
      ]
    },
    {
      name: 'NUST',
      City: 'Islambad',
      website: 'www.nust.pk',
    },
    {
      name: 'GIKI',
      City: 'Swabi',
      website: 'www.giki.pk',
    }
  ]
  return (
    <div>
      <CollegeDisplay college={CollegeData}/>
    </div>
  )
}

export default College