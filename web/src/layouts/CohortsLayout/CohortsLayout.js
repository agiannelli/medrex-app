import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const CohortsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.cohorts()} className="rw-link">
            Cohorts
          </Link>
        </h1>
        <Link to={routes.newCohort()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Cohort
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default CohortsLayout
