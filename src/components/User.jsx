import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const User = () => {
  useLogOutRedirect();

  return <div>UserPage</div>;
};
