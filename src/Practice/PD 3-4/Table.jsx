import React from 'react'

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
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Id</th>
            <th style={{ border: '1px solid black' }}>Name</th>
            <th style={{ border: '1px solid black' }}>Email</th>
            <th style={{ border: '1px solid black' }}>Profession</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr  key={item.Id}>
                <td style={{ border: '1px solid black' }}>{item.Id}</td>
                <td style={{ border: '1px solid black' }}>{item.Name}</td>
                <td style={{ border: '1px solid black' }}>{item.Email}</td>
                <td style={{ border: '1px solid black' }}>{item.Proffesion}</td>
              </tr>
            ))
          }



        </tbody>
      </table>
    </div>
  )
}

export default Table
