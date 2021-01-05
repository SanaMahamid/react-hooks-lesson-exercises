import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Exercise2() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      const users = await axios.get('https://randomuser.me/api/?results=5')
      setUsers(users.data.results)
    })()


  }, [])


  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map((u,i) => {
          return (
            <div key={i}>
              <span>{u.name.first} </span>
              <span>{u.name.last} </span>
              <img src={u.picture.thumbnail} alt="" />
            </div>
          )
        })}

      </div>
    </div>
  )
}