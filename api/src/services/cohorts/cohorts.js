import { db } from 'src/lib/db'

export const cohorts = () => {
  return db.cohort.findMany()
}

export const cohort = ({ id }) => {
  return db.cohort.findUnique({
    where: { id },
  })
}

export const createCohort = ({ input }) => {
  return db.cohort.create({
    data: input,
  })
}

export const updateCohort = ({ id, input }) => {
  return db.cohort.update({
    data: input,
    where: { id },
  })
}

export const deleteCohort = ({ id }) => {
  return db.cohort.delete({
    where: { id },
  })
}
