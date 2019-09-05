import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

const baseUrl = process.env.REACT_APP_BASE_URL;

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body.events));
    })
    .catch(console.error);
};

export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const EVENT_FETCHED = "EVENT_FETCHED";
const eventFetch = event => ({
  type: EVENT_FETCHED,
  event
});

export const loadEvent = id => dispatch => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      // dispatch an EVENT_FETCHED action that contains the event
      dispatch(eventFetch(response.body));
    })
    .catch(console.error);
};

export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
const eventDelete = eventId => ({
  type: EVENT_DELETE_SUCCESS,
  eventId
});

export const deleteEvent = id => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(() => dispatch(eventDelete(id)))
    .catch(console.error);
};

export const updateEvent = (id, formValues) => dispatch => {
  request
    .put(`${baseUrl}/events/${id}`, formValues)
    .then(response => {
      dispatch(eventFetch(response.body));
    })
    .catch(console.error);
};
