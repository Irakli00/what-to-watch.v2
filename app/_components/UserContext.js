"use client";
import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userMoviePreferences, setUserMoviePreferences] = useState({
    mediaType: null,
    genres: null,
    language: null,
    rating: 0,
    releaseDate: null,
    certifications: null,
    // genres,
    // language
    region: null,
    sort: null,
    page: 0,
  });

  const [userAnimePreferences, setUserAnimePreferences] = useState({
    mediaType: "anime",
    genres: ["1", "2"],
    rating: "7",
    releaseDate: "2000..",
    // season: null,
    status: null,
    subtype: "TV",
    sort: null,
  });

  const userPrefferedMedia = "anime";

  return (
    <UserContext.Provider
      value={{
        userMoviePreferences,
        setUserMoviePreferences,
        userAnimePreferences,
        setUserAnimePreferences,
        userPrefferedMedia,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };
