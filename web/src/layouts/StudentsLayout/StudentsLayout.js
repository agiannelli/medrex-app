import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const StudentsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.students()} className="rw-link">
            Students
          </Link>
        </h1>
        <Link to={routes.newStudent()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Student
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default StudentsLayout
