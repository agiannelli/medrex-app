import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/StudentsCell'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: Int!) {
    deleteStudent(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Student = ({ student }) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
      navigate(routes.students())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Student Info</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>First name</th>
              <td>{student.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{student.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ id: student.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Student
