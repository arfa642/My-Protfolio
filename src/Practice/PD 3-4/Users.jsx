import React from 'react'
import UsersInfo from './UsersInfo'

const Table = () => {
  const data = [
    {
      Id: 1,
      Name: 'Arfa',
      Email: 'arfa@gmail',
      Proffesion: 'Frontend Developer'
    },
    {
      Id: 2,
      Name: 'AbdulRehman ',
      Email: 'supari@gmail',
      Proffesion: 'Backend Developer'
    },
    {
      Id: 3,
      Name: 'Aniq',
      Email: 'aniq@gmail',
      Proffesion: 'Trader'
    },
    {
      Id: 4,
      Name: 'Abdullah',
      Email: 'abd@gmail',
      Proffesion: 'Backend Developer'
    },
    {
      Id: 5,
      Name: 'Umair',
      Email: 'umair@gmail',
      Proffesion: 'UI/UX Designer'
    },
    {
      Id: 6,
      Name: 'Armaghan',
      Email: 'armaghan@gmail',
      Proffesion: 'Web Developer'
    },
    {
      Id: 7,
      Name: 'Uzair',
      Email: 'uzair@gmail',
      Proffesion: 'Web Developer'
    }
  ]
  return (
    <div>
      {
        data.map((item) => (
          <UsersInfo item={item} />
        ))
      }



    </div>
  )
}

export default Table
