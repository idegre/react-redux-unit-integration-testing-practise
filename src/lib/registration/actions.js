import qs from 'qs'

export const startRegistration = history => () => history.push({
    pathname:'/registration',
    search: qs.stringify({step: 1})
})