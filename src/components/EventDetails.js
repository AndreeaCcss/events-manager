import * as React from "react";
import EventForm from "./EventForm";

export default function EventDetails(props) {
  return !props.editMode ? (
    <div>
      {props.event && (
        <div>
          <h1>{props.event.name} </h1>
          <i>{props.event.date}</i>
          <p>{props.event.description}</p>
        </div>
      )}
      {!props.event && "Loading..."}
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  ) : (
    <div>
      <EventForm
        values={props.formValues}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  );
}
