import React from "react";
import WineList from "../components/WineList";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PAIR } from "../utils/mutations";
import { QUERY_FOOD, QUERY_USER, QUERY_WINES } from "../utils/queries";
import Auth from "../utils/auth";

const WinePage = () => {
    const { data: dataWines } = useQuery(QUERY_WINES);
    const wines = dataWines?.wines || [];
    const { foodId } = useParams();
    const {data} = useQuery(
        QUERY_FOOD,{
            variables:{foodId: foodId},
        }
    );

    const food = data?.food || {};
    console.log (food);

    if (Auth.loggedIn()) {
        const userId = Auth.getProfile().data._id;
        const { loading, data } = useQuery(QUERY_USER, {
          variables: { userId: userId },
        });
        const user = data?.user || {};
    
        if (loading) {
          return <div>Loading...</div>;
        }
        return (
            <div>
                <div className="space-y-4">
                    <h1> {food.name}'s Pairing Board</h1>
                    <div key={food._id} className="border rounded-lg p-4 shadow">
                        <h3 className="text-xl font-semibold">{food.name}</h3>
                        <img src={food.image} alt={food.name} className="w-full h-48 object-contain mb-2"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Preferred Pairs</h2>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">All Wines</h2>
                    <WineList wines={wines} state = "true" />
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-3xl font-semibold mb-6 text-center px-4">
            You need to be logged in to add Pairs!
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

export default WinePage;
