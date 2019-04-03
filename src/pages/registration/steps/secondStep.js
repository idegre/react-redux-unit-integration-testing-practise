import React, { Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Title } from 'utils/styled'
import FormTextField from 'utils/components/formTextField'
import GridSelector from './../components/gridSelector'
import NavigationButtons from '../components/navigationButtons'
import jsToolsOtions from 'utils/jsToolsOptions'

const SecondStep = props => {
    const { handleSubmit, nextStep, prevStep } = props
    const submitSecondStep = values => {
        nextStep()
    }
    return (
        <Fragment>
            <Title>Tell Us About Yourself</Title>
            <div>Which Javascript Tool/Framework do you like?</div>
            <form name="registrationForm" onSubmit={handleSubmit(submitSecondStep)}>
                <Field
                    name="jsTools"
                    type="text"
                    defaultValue={JSON.stringify( [] )}
                    options={jsToolsOtions}
                    component={GridSelector}
                />
                <Field
                    name="otherJsTools"
                    title="Other:"
                    type="textarea"
                    component={FormTextField}
                />
            <NavigationButtons backFunc={prevStep}/>
            </form>
        </Fragment>
    )
}

export default reduxForm({
    form: 'registrationForm',
    destroyOnUnmount: false,
    initialValues: { jsTools: '[]' }
  })(SecondStep)