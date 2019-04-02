import React, { Component } from 'react'
import { Layout } from 'utils/styled';
import StepFinder from './components/stepFinder'
import qs from 'qs';
import FirstStep from './steps/firstStep'
import SecondStep from './steps/secondStep'
import { FormHolder } from './styled'

const stepComponents = {
    1: FirstStep,
    2: SecondStep,
    3: ''
}

class RegistrationPage extends Component {
    render() {
        const { location : { search }, history } = this.props
        const currentStep = parseInt(qs.parse(search.substring(1)).step)
        const CurrentStepForm = stepComponents[currentStep]
        return (
            <Layout>
                <FormHolder>
                    <StepFinder steps={Object.keys(stepComponents)} step={currentStep} />
                    <CurrentStepForm  />
                </FormHolder>
            </Layout>
        );
    }
}

export default RegistrationPage