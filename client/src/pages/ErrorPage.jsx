import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage({ data }) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-[url('/spilled-wine.png')]">
      <div className= "w-full max-w-md">
        <div className= "bg-rose text-yellow shadow-md rounded-lg p-6">
          <h4 className= "text-2xl font-semibold mb-6 text-center">Uncorking Error</h4>
          <div className="card-body">
              <p className="text-center">
              Something went wrong while fetching your wine. <br></br>Let's toast to second chances!
              <br></br>
              <br></br>
              <Link
                to="/"
                className="w-full bg-burgundy hover:bg-black text-yellow font-bold py-2 px-4 rounded"
                >
                  Go Back to Home
                  </Link>
              </p>
          </div>
        </div>
      </div>
    </main>
  );
}
