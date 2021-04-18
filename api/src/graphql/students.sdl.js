export const schema = gql`
  type Student {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    students: [Student!]!
    student(id: Int!): Student
  }

  input CreateStudentInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input UpdateStudentInput {
    firstName: String
    lastName: String
    email: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student!
    updateStudent(id: Int!, input: UpdateStudentInput!): Student!
    deleteStudent(id: Int!): Student!
  }
`
