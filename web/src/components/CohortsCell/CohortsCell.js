import { Link, routes } from '@redwoodjs/router'

import Cohorts from 'src/components/Cohorts'

export const QUERY = gql`
  query COHORTS {
    cohorts {
      id
      createdAt
      updatedAt
      semester
      year
      class
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cohorts yet. '}
      <Link to={routes.newCohort()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ cohorts }) => {
  return <Cohorts cohorts={cohorts} />
}
