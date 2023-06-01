/* eslint-disable react/prop-types */
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static GetDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-[100vh] centerPos">
          <h1>Something went wrong</h1>
          <button className="px-1 border-1`">Go to Home</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
