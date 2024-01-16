/* eslint-disable react/prop-types */
import { Component, ReactNode } from "react";

interface BoundaryTypes {
  children: ReactNode;
}

interface BoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends Component<BoundaryTypes, BoundaryState> {
  constructor(props: BoundaryTypes) {
    super(props);
    this.state = { hasError: false };
  }

  static GetDerivedStateFromError(error: boolean) {
    console.log(error);
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
