import CohortsLayout from 'src/layouts/CohortsLayout'
import CohortCell from 'src/components/CohortCell'

const CohortPage = ({ id }) => {
  return (
    <CohortsLayout>
      <CohortCell id={id} />
    </CohortsLayout>
  )
}

export default CohortPage
