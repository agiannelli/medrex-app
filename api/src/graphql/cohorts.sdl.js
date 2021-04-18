export const schema = gql`
  type Cohort {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    semester: String!
    year: Int!
    class: String!
  }

  type Query {
    cohorts: [Cohort!]!
    cohort(id: Int!): Cohort
  }

  input CreateCohortInput {
    semester: String!
    year: Int!
    class: String!
  }

  input UpdateCohortInput {
    semester: String
    year: Int
    class: String
  }

  type Mutation {
    createCohort(input: CreateCohortInput!): Cohort!
    updateCohort(id: Int!, input: UpdateCohortInput!): Cohort!
    deleteCohort(id: Int!): Cohort!
  }
`
