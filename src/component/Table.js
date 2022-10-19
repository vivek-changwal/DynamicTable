import React from 'react'

function Table(props) {
  console.log(props.users)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
             FirstName
            </td>
            <td>
             Age
            </td>
            <td>
             City
            </td>
          </tr>
        </thead>
        <tbody>
          {props.users.map((items) => (
            <tr>
              <td>
                {items.fullName}
              </td>
              <td>
                {items.age}
              </td>
              <td>
                {items.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table