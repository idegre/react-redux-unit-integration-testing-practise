import constants from './constants'

export default (state, {type, payload}) => {
    switch (type) {
        case constants.SAVE_VALUES:
            try {
                return {
                    ...state,
                    data: {
                        ...payload.values,
                        emailNotifications: payload.values.emailNotifications === '1',
                        interests: JSON.parse(payload.values.interests),
                        jsTools: JSON.parse(payload.values.jsTools)
                    }
                }
            } catch (e) {
                return {
                    ...state,
                    data: {
                        error: 'there was an error saving your data'
                    }
                }
            }

        default:
            return { ...state }
    }
}