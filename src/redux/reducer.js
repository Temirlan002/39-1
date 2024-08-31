const initialState = {
    title: 'GeekTech!',
    aboutTitle: 'old title',
    contactsTitle: ''
}

export default function reducer(state = initialState, action) {
    
    if (action.type === 'CHANGE_TITLE') {
        return { title: 'GEEKS!'}
    } else if (action.type === 'CHANGE_ABOUT_TITLE') {
        return { aboutTitle: 'New about title'}
    } else if (action.type === 'WITH_PARAMS') {
        return { contactsTitle: action.payload}
    } else if (action.type === 'FROM_INPUT') {
        return {contactsTitle: action.payload}
    }

    return state
}