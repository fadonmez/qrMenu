import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  if (false) {
    return <Navigate to="/" />;
  }
  return children;
}
