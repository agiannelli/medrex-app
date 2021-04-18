import {
  cohorts,
  cohort,
  createCohort,
  updateCohort,
  deleteCohort,
} from './cohorts'

describe('cohorts', () => {
  scenario('returns all cohorts', async (scenario) => {
    const result = await cohorts()

    expect(result.length).toEqual(Object.keys(scenario.cohort).length)
  })

  scenario('returns a single cohort', async (scenario) => {
    const result = await cohort({ id: scenario.cohort.one.id })

    expect(result).toEqual(scenario.cohort.one)
  })

  scenario('creates a cohort', async (scenario) => {
    const result = await createCohort({
      input: { semester: 'String', year: 5943642, class: 'String' },
    })

    expect(result.semester).toEqual('String')
    expect(result.year).toEqual(5943642)
    expect(result.class).toEqual('String')
  })

  scenario('updates a cohort', async (scenario) => {
    const original = await cohort({ id: scenario.cohort.one.id })
    const result = await updateCohort({
      id: original.id,
      input: { semester: 'String2' },
    })

    expect(result.semester).toEqual('String2')
  })

  scenario('deletes a cohort', async (scenario) => {
    const original = await deleteCohort({ id: scenario.cohort.one.id })
    const result = await cohort({ id: original.id })

    expect(result).toEqual(null)
  })
})
