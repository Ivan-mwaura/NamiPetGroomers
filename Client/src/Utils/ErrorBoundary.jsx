// Utils/ErrorBoundary.jsx
import React, { Component } from "react";
import ErrorComponent from "./Error"; // Import directly, no need to lazy-load

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error("ErrorBoundary caught an error", error, errorInfo);
		this.setState({ error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorComponent
					error={this.state.error}
					errorInfo={this.state.errorInfo}
				/>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
