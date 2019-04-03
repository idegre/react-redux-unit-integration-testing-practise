import React, { Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Title } from 'utils/styled'
import FormSelectField from 'utils/components/formSelectField'
import NavigationButtons from '../components/navigationButtons'
import { required } from 'utils/formValidations'

const RadioInput = ({input, title}) => <div>{title}<input {...input} value={false} type="radio" /><input {...input} value={true} type="radio" /></div>

const ThirdStep = props => {
    const { handleSubmit, submitValues, prevStep } = props
    const submitSecondStep = values => {
        console.log(values)
        submitValues(values)
    }
    return (
        <Fragment>
            <Title>Keep in touch!</Title>
            <div>Which Javascript Tool/Framework do you like?</div>
            <form name="registrationForm" onSubmit={handleSubmit(submitSecondStep)}>
                <Field
                    name="emailNotifications"
                    title={'Would you like to receive email notifications from us?'}
                    normalize={v => v ? '1' : '0'}
                    component={RadioInput}
                />
                <Field
                    name="interests"
                    title="Are you interested on"
                    options={['Learning Webinars', 'Job Offers']}
                    component={FormSelectField}
                />
                <Field
                    name="AcceptTerms"
                    title={'Accept Terms & conditions'}
                    component={({input, meta: {touched, error}, title}) => <span>{title}<input {...input} value={true} type="checkbox" />{touched && error}</span>}
                    validate={ required }
                />
            <NavigationButtons backFunc={prevStep}/>
            </form>
        </Fragment>
    )
}

export default reduxForm({
    form: 'registrationForm',
    destroyOnUnmount: false,
    initialValues: { emailNotifications: true }
  })(ThirdStep)