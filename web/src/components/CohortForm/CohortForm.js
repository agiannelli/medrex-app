import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const CohortForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.cohort?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="semester"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Semester
        </Label>
        <TextField
          name="semester"
          defaultValue={props.cohort?.semester}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="semester" className="rw-field-error" />

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>
        <NumberField
          name="year"
          defaultValue={props.cohort?.year}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="year" className="rw-field-error" />

        <Label
          name="class"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Class
        </Label>
        <TextField
          name="class"
          defaultValue={props.cohort?.class}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="class" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CohortForm
