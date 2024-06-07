import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-[url('../public/wine-table-pairing.jpg')]">
      <div className="w-full max-w-md">
        <div className="bg-rose text-yellow shadow-md rounded-lg p-6">
          <h4 className="text-3xl font-semibold mb-6 text-center">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p className="text-center">
                Success! You may now head{" "}
                <Link to="/" className="text-blue-500 hover:text-blue-700">
                  back to the homepage.
                </Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                    autoComplete="username"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="YourEmail@test.com"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </div>
                <button
                  className="w-full bg-burgundy hover:bg-black text-yellow font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {error && (
              <div className="mt-4 p-3 bg-red-500 text-white text-center rounded">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
