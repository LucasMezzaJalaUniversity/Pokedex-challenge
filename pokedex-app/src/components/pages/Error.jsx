import { useRouteError } from "react-router";

export const Error = () => {
  const error = useRouteError();

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "5em"}}>
      <h1>Error</h1>
      <p>Something went wrong while loading the page. Please try again later.</p>
      
      {error && (
        <pre style={{ color: "red", marginTop: "1em" }}>
          {error.status && <div>Status: {error.status}</div>}
          {error.statusText && <div>{error.statusText}</div>}
          {error.message && <div>{error.message}</div>}
        </pre>
      )}
    </div>
  );
}