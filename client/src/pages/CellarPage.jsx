import {Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import React from "react";

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

export default function CellarPage() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/cellar" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
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
            <div key={pair}>
              <div>
                <h4>
                  Wine: {pair.wine} <br />
                  Food: {pair.food}<br />
                </h4>
              </div>
            </div>
          ))}
      </div>
0    </div>
  );
};
