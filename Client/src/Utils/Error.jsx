// Utils/Error.jsx
import React from "react";

const ErrorComponent = ({ error, errorInfo }) => (
	<div>
		<h1>Something went wrong.</h1>
		<details style={{ whiteSpace: "pre-wrap" }}>
			{error && error.toString()}
			<br />
			{errorInfo && errorInfo.componentStack}
		</details>
	</div>
);

export default ErrorComponent;
