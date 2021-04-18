import Student from 'src/components/Student'

export const QUERY = gql`
  query FIND_STUDENT_BY_ID($id: Int!) {
    student: student(id: $id) {
      id
      createdAt
      updatedAt
      firstName
      lastName
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Student not found</div>

export const Success = ({ student }) => {
  return <Student student={student} />
}
