import { useEffect, useState } from "react";
import API_BASE from "../utils/api";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/admin/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users", err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Registered Users 👤</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={cell}>Username</th>
            <th style={cell}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td style={cell}>{u.username}</td>
              <td style={cell}>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cell = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};
