import React, { Component } from 'react'
import { Layout } from 'utils/styled';
import StepFinder from './components/stepFinder'
import qs from 'qs';
import FirstStep from './steps/firstStep'
import SecondStep from './steps/secondStep'
import ThirdStep from './steps/thirdStep'
import { FormHolder } from './styled'

const stepComponents = {
    1: FirstStep,
    2: SecondStep,
    3: ThirdStep
}

class RegistrationPage extends Component {

    returnToStart() {
        const { history } = this.props
        history.push('/')
    }

    render() {
        const { location : { search }, toStep, setValues } = this.props
        const currentStep = parseInt(qs.parse(search.substring(1)).step)
        const CurrentStepForm = stepComponents[currentStep]
        if ( !CurrentStepForm ) {
            this.returnToStart()
            return null
        }
        
        const nextStep = () => toStep(currentStep + 1)
        const prevStep = () => toStep(currentStep - 1)

        return (
            <Layout>
                <FormHolder>
                    <StepFinder steps={Object.keys(stepComponents)} step={currentStep} />
                    <CurrentStepForm  nextStep={ nextStep } prevStep={ prevStep } submitValues={setValues} />
                </FormHolder>
            </Layout>
        );
    }
}

export default RegistrationPage