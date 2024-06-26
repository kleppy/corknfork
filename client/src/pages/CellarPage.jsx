// Import necessary modules and components from React, Apollo Client, and React Router
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import React from "react";

// Import the GraphQL query and authentication utility
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

const CellarPage = () => {
  // Check if the user is logged in
  if (Auth.loggedIn()) {
    // Get the user ID from the authentication profile
    const userId = Auth.getProfile().data._id;

    // Use Apollo Client's useQuery hook to fetch user data
    const { loading, data } = useQuery(QUERY_USER, {
      variables: { userId: userId },
    });

    // Extract user data from the query result
    const user = data?.user || {};

    // Display a loading message while the data is being fetched
    if (loading) {
      return <div>Loading...</div>;
    }

    // If no user data is found, prompt the user to log in or sign up
    if (!user) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-no-repeat">
          <h2 className="text-3xl font-semibold mb-6 text-center px-4">
            You need to be logged in to use your cellar!
          </h2>
          <Link
            to="/login"
            className="bg-burgundy hover:bg-black text-yellow font-bold py-2 px-4 rounded mb-4"
          >
            Go to Login
          </Link>
          <Link
            to="/signup"
            className="bg-burgundy hover:bg-black text-yellow font-bold py-2 px-4 rounded mb-4"
          >
            Go to Signup
          </Link>
        </div>
      );
    }

    // If the user's cellar is empty, display a message prompting them to add wines
    if (user.cellar.length === 0) {
      return (
        <div className="bg-no-repeat bg-cover bg-[url('/wine-cellar-xxl-bg.jpg')] flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md">
            <div className="bg-rose text-yellow shadow-md rounded-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-center">Party Foul!</h2>
              <div className="card-body text-center">
                <p>
                  Uh-oh {user.username}! Looks like your wine cellar is looking a bit
                  bare. To elevate your culinary creations, you need the right wines.
                  Head back to the homepage to find the perfect bottles to complement
                  your dishes and bring your cellar to gourmet status.
                </p>
                <br></br>
                <Link
                  to="/"
                  className="w-full bg-burgundy hover:bg-black text-yellow font-bold py-2 px-4 rounded"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // If the user has wines in their cellar, display them
    // TODO: Make it so if a user has pairs saved to their wine cellar they display here very similar to HomePage.
    return (
      <div className="pt-20">
        <h1> {user.username}'s Wine Cellar</h1>
        <div className="flex-row justify-space-between my-4">
          {user.cellar &&
            user.cellar.map((pair) => (
              <div key={pair.wine}>
                <div>
                  <h4>
                    Wine: {pair.wine} <br />
                    Food: {pair.food}
                    <br />
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  // If the user is not logged in, prompt them to log in or sign up
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/wine-cellar-xxl-bg.jpg')] flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <div className="bg-rose text-yellow shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            ACCESS DENIED
          </h2>
          <div className="card-body text-center">
            <p className="text-center">You must login to view your wine cellar!</p>
            <br></br>
            <Link
              to="/login"
              className="w-full bg-burgundy hover:bg-black text-yellow font-bold py-2 px-4 rounded"
            >
              Go to Login
            </Link>
            <br></br>
            <br></br>
            <Link
              to="/signup"
              className="w-full bg-burgundy hover:bg-black text-yellow font-bold py-2 px-4 rounded"
            >
              Go to Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellarPage;
