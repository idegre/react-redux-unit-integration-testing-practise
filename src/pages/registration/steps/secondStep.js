import React, { Fragment } from 'react'
import { Title } from 'utils/styled'
import FormTextField from 'utils/components/formTextField'
import NavigationButtons from '../components/navigationButtons'
import { reduxForm, Field } from 'redux-form'

const SecondStep = props => {
    const { handleSubmit } = props
    console.log(props)
    return (
        <Fragment>
            <Title>Tell Us About Yourself</Title>
                <form name="registrationForm" onSubmit={handleSubmit}>
                    <Field
                        name="fullName"
                        type="text"
                        title="Full Name"
                        component={FormTextField}
                    />
                    <Field
                        name="email"
                        type="text"
                        title="Email"
                        component={FormTextField}
                    />
                    <Field
                        name="jobDescription"
                        type="text"
                        title="Job Description"
                        component={FormTextField}
                    />
                </form>
            <NavigationButtons/>
        </Fragment>
    )
}

export default reduxForm({
    form: 'registrationForm',
    destroyOnUnmount: false,
  })(SecondStep)