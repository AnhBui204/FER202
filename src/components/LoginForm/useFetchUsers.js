// useFetchUsers.js
import { useState, useEffect } from "react";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Gọi fetchUsers khi component được mount

  return { users, fetchUsers }; // Trả về users và hàm fetchUsers
};

export default useFetchUsers;
