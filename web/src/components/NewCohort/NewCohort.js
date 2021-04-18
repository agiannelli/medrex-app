import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CohortForm from 'src/components/CohortForm'

import { QUERY } from 'src/components/CohortsCell'

const CREATE_COHORT_MUTATION = gql`
  mutation CreateCohortMutation($input: CreateCohortInput!) {
    createCohort(input: $input) {
      id
    }
  }
`

const NewCohort = () => {
  const [createCohort, { loading, error }] = useMutation(
    CREATE_COHORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Cohort created')
        navigate(routes.cohorts())
      },
    }
  )

  const onSave = (input) => {
    createCohort({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Cohort</h2>
      </header>
      <div className="rw-segment-main">
        <CohortForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCohort
