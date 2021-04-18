import StudentsLayout from 'src/layouts/StudentsLayout'
import EditStudentCell from 'src/components/EditStudentCell'

const EditStudentPage = ({ id }) => {
  return (
    <StudentsLayout>
      <EditStudentCell id={id} />
    </StudentsLayout>
  )
}

export default EditStudentPage
