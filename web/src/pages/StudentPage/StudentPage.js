import StudentsLayout from 'src/layouts/StudentsLayout'
import StudentCell from 'src/components/StudentCell'

const StudentPage = ({ id }) => {
  return (
    <StudentsLayout>
      <StudentCell id={id} />
    </StudentsLayout>
  )
}

export default StudentPage
