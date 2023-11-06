import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { token } = useAuth();

  return (
    <div>{token ? <Outlet /> : <Navigate to="/auth/login" replace />}</div>
  );
}

export default ProtectedRoute;
