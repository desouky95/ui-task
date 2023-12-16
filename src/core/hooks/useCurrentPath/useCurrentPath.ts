import { useLocation, useMatch } from "react-router-dom";

const useCurrentPath = () => {
  const location = useLocation();
  //   const [{ route }] = matchRoutes(routes, location);
  const match = useMatch(location.pathname);

  return match;
};

export default useCurrentPath;
