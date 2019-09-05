import {
  EVENTS_FETCHED,
  EVENT_CREATE_SUCCESS,
  EVENT_DELETE_SUCCESS
} from "../actions/events";

export default (state = null, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;
    case EVENT_CREATE_SUCCESS:
      return [...state, action.event];
    case EVENT_DELETE_SUCCESS:
      return [...state.filter(event => event.id !== action.eventId)];
    default:
      return state;
  }
};
