// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" prerender />
        <Route path="/students/new" page={NewStudentPage} name="newStudent" />
        <Route path="/students/{id:Int}/edit" page={EditStudentPage} name="editStudent" />
        <Route path="/students/{id:Int}" page={StudentPage} name="student" />
        <Route path="/students" page={StudentsPage} name="students" />
        <Route path="/cohorts/new" page={NewCohortPage} name="newCohort" />
        <Route path="/cohorts/{id:Int}/edit" page={EditCohortPage} name="editCohort" />
        <Route path="/cohorts/{id:Int}" page={CohortPage} name="cohort" />
        <Route path="/cohorts" page={CohortsPage} name="cohorts" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
