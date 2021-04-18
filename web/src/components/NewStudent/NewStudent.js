import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import StudentForm from 'src/components/StudentForm'

import { QUERY } from 'src/components/StudentsCell'

const CREATE_STUDENT_MUTATION = gql`
  mutation CreateStudentMutation($input: CreateStudentInput!) {
    createStudent(input: $input) {
      id
    }
  }
`

const NewStudent = () => {
  const [createStudent, { loading, error }] = useMutation(
    CREATE_STUDENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Student created')
        navigate(routes.students())
      },
    }
  )

  const onSave = (input) => {
    createStudent({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Student</h2>
      </header>
      <div className="rw-segment-main">
        <StudentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStudent
