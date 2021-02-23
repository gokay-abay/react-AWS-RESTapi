import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  // base api url
  const API_INVOKE_URL =
    "https://hygas88vd3.execute-api.us-west-2.amazonaws.com/prod"

  // state variable for form object
  const [students, setStudents] = useState([])
  const [student, setStudent] = useState({})

  // api calls

  // useEffect to get all students
  const searchApi = async () => {
    fetch(API_INVOKE_URL + "/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(JSON.parse(data.body))
      })
  }

  const submit = async (e) => {
    e.preventDefault()
    fetch(API_INVOKE_URL + "/students", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student: {
          studentId: student.studentId,
          firstName: student.firstName,
          lastName: student.lastName,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err))
  }

  useEffect(() => {
    searchApi()
  }, [])

  return (
    <div>
      <h2>Students</h2>
      <form onSubmit={submit}>
        <label>Student Id: </label>
        <input
          type="text"
          name="student[studentId]"
          value={student.studentId}
          onChange={(e) =>
            setStudent({ ...student, studentId: e.target.value })
          }
        />
        <br />
        <label>First Name: </label>
        <input
          type="text"
          name="student[firstName]"
          value={student.firstName}
          onChange={(e) =>
            setStudent({ ...student, firstName: e.target.value })
          }
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="student[lastName]"
          value={student.lastName}
          onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
        />
        <br />
        <input type="submit" name="Create Student" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
