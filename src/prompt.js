import React from "react";
import "./prompt.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }
  componentDidMount() {
    console.log("aya");
    this.setState({
      showPopup: this.props.status,
    });
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
    this.props.setshow(false);
  }
  render() {
    return (
      <div className="app">
        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default App;
