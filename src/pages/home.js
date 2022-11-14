import React from "react";
import { UserAuth } from "../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const home = () => {
  const { user, loading } = UserAuth();
  return (
    <div className="flex mx-4 mt-3">
      <div className="flex flex-row items-center justify-center w-full">
        <h1 className="text-2xl">
          Welcome{" "}
          <span className="text-sky-500 font-bold tracking-tight animate-pulse">
            {loading ? <CircularProgress /> : user.displayName}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default home;
