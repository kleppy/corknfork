import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;

      Auth.login(token);
      props.history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-[url('../public/login-open-wine.jpg')]">
      <div className="w-full max-w-md">
        <div className="bg-rose text-yellow shadow-md rounded-lg p-6">
          <h4 className="text-3xl font-semibold mb-6 text-center">Login</h4>
          <div className="card-body">
            <Link to="/signup" className="text-burgundy hover:text-rose mb-4">
              ← Go to Signup
            </Link>
            <form
              onSubmit={handleFormSubmit}
              className="bg-white p-8 shadow-md rounded-lg w-full max-w-md"
            >
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email address:
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="pwd" className="block text-gray-700 mb-2">
                  Password:
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </div>
              {error && (
                <div className="mb-4 text-red-500">
                  <p>The provided credentials are incorrect</p>
                </div>
              )}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
