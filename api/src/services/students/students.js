import { db } from 'src/lib/db'

export const students = () => {
  return db.student.findMany()
}

export const student = ({ id }) => {
  return db.student.findUnique({
    where: { id },
  })
}

export const createStudent = ({ input }) => {
  return db.student.create({
    data: input,
  })
}

export const updateStudent = ({ id, input }) => {
  return db.student.update({
    data: input,
    where: { id },
  })
}

export const deleteStudent = ({ id }) => {
  return db.student.delete({
    where: { id },
  })
}
