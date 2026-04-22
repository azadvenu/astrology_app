import { useAppSelector } from "../hooks";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any) {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) return <Navigate to="/login" />;

  return children;
}