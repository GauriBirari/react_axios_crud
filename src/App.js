import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  // get data function
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>Get User Data Using Axios</h1>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default App
