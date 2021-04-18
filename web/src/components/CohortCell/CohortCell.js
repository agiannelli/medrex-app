import Cohort from 'src/components/Cohort'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Cohort not found</div>

export const Success = ({ cohort }) => {
  return <Cohort cohort={cohort} />
}
