import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RequireAppNav({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const cameFromApp = sessionStorage.getItem('appNav');
    if (!cameFromApp) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return children;
}

export default RequireAppNav;