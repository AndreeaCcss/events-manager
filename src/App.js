import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import EventsListContainer from "./components/EventsListContainer";
import CreateEventsFormContainer from "./components/createEventFormContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/" exact component={CreateEventsFormContainer} />
          <Route path="/events/:id" component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
