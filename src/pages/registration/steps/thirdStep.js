import React, { Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Title } from 'utils/styled'
import FormSelectField from 'utils/components/formSelectField'
import NavigationButtons from '../components/navigationButtons'
import { required } from 'utils/formValidations'
import { SpacedDiv } from './../styled'

const RadioInput = ({input, title}) => <div>
    {title}
    <SpacedDiv>
        <input onChange={() => input.onChange(1)} value={'1'} checked={input.value === '1'} type="radio" />yes
        <input onChange={() => input.onChange(0)} value={'0'} checked={input.value === '0'} type="radio" />no
    </SpacedDiv>
</div>

const ThirdStep = props => {
    const { handleSubmit, submitValues, prevStep } = props
    const submitSecondStep = values => {
        submitValues(values)
    }
    return (
        <Fragment>
            <Title>Keep in touch!</Title>
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
                    component={({input, meta: {touched, error}, title}) => <SpacedDiv>{title}<input {...input} value={true} checked={input.value === true} type="checkbox" />{touched && error}</SpacedDiv>}
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
    initialValues: { emailNotifications: '1' }
  })(ThirdStep)