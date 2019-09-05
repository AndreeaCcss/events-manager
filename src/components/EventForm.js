import * as React from "react";

export default class EventForm extends React.Component {
  render() {
    // console.log("values", this.props.values);
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.props.values.name}
            onChange={this.props.onChange}
          />
          Date:
          <input
            type="text"
            name="date"
            value={this.props.values.date}
            onChange={this.props.onChange}
          />
          Description:
          <input
            type="text"
            name="description"
            value={this.props.values.description}
            onChange={this.props.onChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
