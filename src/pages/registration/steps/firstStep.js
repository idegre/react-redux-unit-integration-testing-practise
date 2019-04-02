import React, { Fragment } from 'react'
import { Title } from 'utils/styled'
import FormTextField from 'utils/components/formTextField'
import NavigationButtons from '../components/navigationButtons'
import { reduxForm, Field } from 'redux-form'

const required = value => value ? undefined : 'Required'

const FirstStep = props => {
    const { handleSubmit, nextStep } = props
    const submitFirstStep = values => {
        nextStep()
    }
    return (
        <Fragment>
            <Title>Personal Information</Title>
                <form onSubmit={handleSubmit(submitFirstStep)}>
                    <Field
                        name="fullName"
                        type="text"
                        title="Full Name"
                        component={ FormTextField }
                        validate={ required }
                    />
                    <Field
                        name="email"
                        type="text"
                        title="Email"
                        validate={ required }
                        component={ FormTextField }
                    />
                    <Field
                        name="jobDescription"
                        type="text"
                        title="Job Description"
                        component={ FormTextField }
                    />
                    <NavigationButtons />
                </form>
        </Fragment>
    )
}

export default reduxForm({
    form: 'registrationForm',
    destroyOnUnmount: false,
  })(FirstStep)