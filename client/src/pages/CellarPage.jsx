import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'; 
import React from "react";

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const CellarPage = () => {
  if (Auth.loggedIn()){
    const userId = Auth.getProfile().data._id;
    const { loading, data } = useQuery(QUERY_USER,{
      variables: { userId: userId }
    });
    const user =  data?.user || {};
    console.log(data)

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return (
        <h2>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h2>
      );
    }
    return (
      <div>
        {/* TODO: Change "Personal" to Users name. */}
        {/* TODO: Make it so all listed wines, foods, and pairs come from that users database. */}
        <h1> {user.username}'s Wine Cellar</h1>
        <div className="flex-row justify-space-between my-4">
          {user.cellar &&
            user.cellar.map((pair) => (
              <div>
                <div>
                  <h4>
                    Wine: {pair.wine} <br />
                    Food: {pair.food}<br />
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <h2>
      You need to be logged in to see this. Use the navigation links above to
      sign up or log in!
      <Link to="/signup" className="text-burgundy hover:text-rose mb-4">
      ← Go to Signup
      </Link>
    </h2>
  ); 
};

export default CellarPage;