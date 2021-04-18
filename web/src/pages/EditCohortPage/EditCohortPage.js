import CohortsLayout from 'src/layouts/CohortsLayout'
import EditCohortCell from 'src/components/EditCohortCell'

const EditCohortPage = ({ id }) => {
  return (
    <CohortsLayout>
      <EditCohortCell id={id} />
    </CohortsLayout>
  )
}

export default EditCohortPage
