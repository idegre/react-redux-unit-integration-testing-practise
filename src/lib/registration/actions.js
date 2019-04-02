import qs from 'qs'
import {
    ADVANCE_STEP
} from './constants'

export const goToStep = (history, step) => () => history.push({
    pathname:'/registration',
    search: qs.stringify({ step })
})