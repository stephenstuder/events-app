import EventService from '@/services/EventService.js'

export const namespaced = true;

export const state = {
    events: [],
    eventsTotal: 0,
    event: {}
}

export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event)
    },
    SET_EVENTS(state, events) {
        state.events = events;
    },
    GET_EVENT_TOTAL(state, eventTotal) {
        state.eventsTotal = eventTotal;
    },
    SET_EVENT(state, event) {
        state.event = event;
    }
}
export const actions = {
    createEvent({ commit, dispatch, rootState }, event) {
        return EventService.postEvent(event).then(() => {
            console.log('User creating Event is ' + rootState.user.user.name)
            commit('ADD_EVENT', event)
        })
    },
    fetchEvents({ commit }, { perPage, page }) {
        EventService.getEvents(perPage, page)
            .then((response) => {
                commit('SET_EVENTS', response.data)
                commit('GET_EVENT_TOTAL', response.headers['x-total-count'])
            })
            .catch((error) => {
                console.log('There was an error:', error.response)
            })
    },
    fetchEvent({ commit, getters }, id) {
        var event = getters.getEventById(id)

        if (event) {
            commit('SET_EVENT', event)
        } else {
            EventService.getEvent(id).then(response => {
                commit('SET_EVENT', response.data)
            }).catch(error => {
                console.log('There was an error', error.response)
            })
        }
    }
}

export const getters = {
    getEventById: state => id => {
        return state.events.find(event => event.id === id)
    }
}