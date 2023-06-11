import { useState, useEffect } from "react";

type Props = {};

export const useAuth = () => {
  const [user, setUser] = useState(false);

  return user;
};
