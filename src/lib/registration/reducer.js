import constants from './constants'

export default (state, {type, payload}) => {
    switch (type) {
        case constants.SAVE_VALUES:
        return {
            ...state,
            data: {
                ...payload.values,
                emailNotifications: payload.values.emailNotifications === '1',
                interests: JSON.parse(payload.values.interests),
                jsTools: JSON.parse(payload.values.jsTools)
            }
        }

        default:
            return { ...state };
    }
}