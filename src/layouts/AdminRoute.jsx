import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  if (true) {
    return <Navigate to="/" />;
  }
  return children;
}
