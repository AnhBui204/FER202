// useFetchUsers.js
import { useEffect, useState } from "react";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return users;
};

export default useFetchUsers;
