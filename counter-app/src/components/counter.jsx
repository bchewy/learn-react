import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   console.log("Constructor", this); //Shows this
  //   //Sets this for handleincrement to this counter class (bind)
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // Apply styles this way
  // Call it with style={this.styles }
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //Arrow function syntax fix 'this' binding event handler's problem
  handleIncrement = () => {
    console.log("Increment Clicked", this);
    //this.state.count++; // -- Do not modify state like this directly
    // Why not? --React does not call render() method and view is not method

    // Tells react that state of component is going to change
    // and thus render() method will be
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      // React.Fragment because jsx notation is converted to
      // React.CreateElement() and only takes in one element
      <React.Fragment>
        <div className="container-fluid">
          <img className="img-fluid" src={this.state.imageUrl} alt="" />
          <br />
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <br />
          <button
            onClick={this.handleIncrement}
            className="btn btn-primary btn-sm mr-2"
          >
            Increase
          </button>
          <button
            onClick={this.handleDecrement}
            className="btn btn-danger btn-sm ml-2"
          >
            Decrease
          </button>
          {/* Conditionals in JSX */}
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //Picking the count property from state object
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
