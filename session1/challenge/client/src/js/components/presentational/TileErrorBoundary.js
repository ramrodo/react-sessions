import React, { Component } from "react";
import { DataTileStyled } from "../container/App.styled";

class TileErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <DataTileStyled error />;
    }
    return children;
  }
}

export { TileErrorBoundary };
