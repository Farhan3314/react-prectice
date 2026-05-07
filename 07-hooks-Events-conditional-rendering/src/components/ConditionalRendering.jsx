import { useState, useEffect } from "react";

const ConditionalRendering = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.includes(search)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>

      <button
        onClick={() => setShow(!show)}
        className="bg-blue-500 px-4 py-2 rounded mb-4">

        {show ? "Hide Users" : "Show Users"}
      </button>

      <input type="text" placeholder="Search user..." value={search}
        onChange={handleSearch}
        className="p-2 mb-4 w-full text-white rounded" />

      {!show ? (
        <p>Users are hidden</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <div className="bg-gray-800 p-4 rounded shadow" key={user.id}>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ConditionalRendering;
