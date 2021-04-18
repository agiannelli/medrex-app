import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/CohortsCell'

const DELETE_COHORT_MUTATION = gql`
  mutation DeleteCohortMutation($id: Int!) {
    deleteCohort(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const CohortsList = ({ cohorts }) => {
  const [deleteCohort] = useMutation(DELETE_COHORT_MUTATION, {
    onCompleted: () => {
      toast.success('Cohort deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete  this cohort?')) {
      deleteCohort({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Year</th>
            <th>Class</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cohorts.map((cohort) => (
            <tr key={cohort.id}>
              <td>{truncate(cohort.semester)}</td>
              <td>{truncate(cohort.year)}</td>
              <td>{truncate(cohort.class)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.cohort({ id: cohort.id })}
                    title={'View cohort info'}
                    className="rw-button rw-button-small"
                  >
                    View
                  </Link>
                  <Link
                    to={routes.editCohort({ id: cohort.id })}
                    title={'Edit cohort ' + cohort.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete cohort ' + cohort.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(cohort.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CohortsList
