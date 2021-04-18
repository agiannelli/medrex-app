import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/CohortsCell'

const DELETE_COHORT_MUTATION = gql`
  mutation DeleteCohortMutation($id: Int!) {
    deleteCohort(id: $id) {
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

const Cohort = ({ cohort }) => {
  const [deleteCohort] = useMutation(DELETE_COHORT_MUTATION, {
    onCompleted: () => {
      toast.success('Cohort deleted')
      navigate(routes.cohorts())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete cohort ' + id + '?')) {
      deleteCohort({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Cohort Info</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Semester</th>
              <td>{cohort.semester}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{cohort.year}</td>
            </tr>
            <tr>
              <th>Class</th>
              <td>{cohort.class}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCohort({ id: cohort.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(cohort.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Cohort
