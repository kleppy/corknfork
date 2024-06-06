import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import React from "react";

import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

const CellarPage = () => {
  if (Auth.loggedIn()) {
    const userId = Auth.getProfile().data._id;
    const { loading, data } = useQuery(QUERY_USER, {
      variables: { userId: userId },
    });
    const user = data?.user || {};

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-3xl font-semibold mb-6 text-center px-4">
            You need to be logged in to use your cellar!
          </h2>
          <Link
            to="/login"
            className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded mb-4"
          >
            Go to Login
          </Link>
          <Link
            to="/signup"
            className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded "
          >
            Go to Signup
          </Link>
        </div>
      );
    }

    if (user.cellar.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-3xl font-semibold mb-6 text-center px-4">
            Hi {user.username}, You haven't added any foods or wines to your
            cellar. Go to Home to find some!
          </h2>
          <Link
            to="/"
            className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded mb-4"
          >
            Go to Home
          </Link>
        </div>
      );
    }

    //TODO: Make it so if a user has pairs saved to their wine cellar they display here very similar to HomePage.
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center px-4">
        You need to be logged in to use your cellar!
      </h2>
      <Link
        to="/login"
        className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded mb-4"
      >
        Go to Login
      </Link>
      <Link
        to="/signup"
        className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded "
      >
        Go to Signup
      </Link>
    </div>
  );
};

export default CellarPage;
