import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function StudentDetail() {
  let { id } = useParams()

  const [student, setStudent] = useState({})

  const API_INVOKE_URL =
    "https://hygas88vd3.execute-api.us-west-2.amazonaws.com/prod"

  const getById = useRef(() => {})

  useEffect(() => {
    getById.current()
  }, [])

  getById.current = async () => {
    try {
      const res = await axios.get(`${API_INVOKE_URL}/students/${id}`)
      setStudent(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  // add a put method to allow users to change the first and last name

  return (
    <div>
      <p>
        {student.firstName} {student.lastName}
      </p>
      <h1>Change first and last name</h1>
    </div>
  )
}
