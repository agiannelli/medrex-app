import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CohortForm from 'src/components/CohortForm'

export const QUERY = gql`
  query FIND_COHORT_BY_ID($id: Int!) {
    cohort: cohort(id: $id) {
      id
      createdAt
      updatedAt
      semester
      year
      class
    }
  }
`
const UPDATE_COHORT_MUTATION = gql`
  mutation UpdateCohortMutation($id: Int!, $input: UpdateCohortInput!) {
    updateCohort(id: $id, input: $input) {
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

export const Success = ({ cohort }) => {
  const [updateCohort, { loading, error }] = useMutation(
    UPDATE_COHORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Cohort updated')
        navigate(routes.cohorts())
      },
    }
  )

  const onSave = (input, id) => {
    updateCohort({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Cohort {cohort.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CohortForm
          cohort={cohort}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
