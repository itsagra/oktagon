import fetchMatches from "./store/hooks/fetchMatches";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import formatDate from "./helper/formatDate";
const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const matches = useSelector((state) => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  if (loading) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={500}
        width={500}
        className="text-center"
      />
    );
  } else if (error) {
    return "Error!!";
  } else
    return (
      <div className="flex flex-col h-auto justify-between bg-gradient-to-b from-yellow-700 to-yellow-300 bg-25% bg-repeat-x">
        <header className="flex h-10 mt-2 text-white">
          <button className="absolute z-10 cursor-pointer">
            <svg className="w-10 ml-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
            </svg>
          </button>
          <div className="absolute text-center mt-1 w-screen">
            <h1 className="text-2xl">Matches</h1>
          </div>
        </header>
        <main className="mb-auto mt-5 mx-auto w-11/12 h-full">
          {matches.map((match) => (
            <div
              key={match.result.gameId}
              className="h-2/6 bg-white mb-5 rounded shadow-lg flex flex-col"
            >
              <header className="mt-3 text-center">
                <time className="text-yellow-500">
                  {formatDate(match.result.teeTime)}
                </time>
                <p className="text-sm text-gray-400">Indonesia</p>
              </header>
              <article className="grid grid-cols-3 justify-items-center text-center text-md text-gray-500 mb-2">
                <div>
                  <img
                    src="https://cdn.elevenscore.com/football/team/3b400207be542a1de0555de9a0872679.png"
                    alt="team"
                  />
                  <p>Home</p>
                </div>
                <section className="pt-12 md:pt-14 lg:pt-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black">
                  {match.result.homeTeamEvent.score +
                    " - " +
                    match.result.awayTeamEvent.score}
                </section>
                <div>
                  <img
                    src="https://cdn.elevenscore.com/football/team/3b400207be542a1de0555de9a0872679.png"
                    alt="team"
                  />
                  <p>Away</p>
                </div>
              </article>
              <footer className="h-12 border border-top p-2 flex justify-between text-yellow-500 cursor-pointer">
                <div className="flex pl-4">
                  <svg className="w-7 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z"
                    />
                  </svg>
                  <p>Statistics</p>
                </div>
                <div>
                  <svg className="w-7 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                    />
                  </svg>
                </div>
              </footer>
            </div>
          ))}
        </main>
        <footer className="sticky text-center bg-white border border-top bottom-0 right-0 left-0 h-16 text-gray-500 grid grid-cols-4 justify-items-center place-items-center">
          <button className="w-full cursor-pointer hover:text-yellow-300 focus:text-yellow-300">
            <svg className="w-8 mx-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4H4M4,6H11V8.13C9.24,8.59 8,10.18 8,12C8,13.82 9.24,15.41 11,15.87V18H4V16H7V8H4V6M13,6H20V8H17V16H20V18H13V15.87C14.76,15.41 16,13.82 16,12C16,10.18 14.76,8.59 13,8.13V6M4,10H5V14H4V10M19,10H20V14H19V10M13,10.27C13.62,10.63 14,11.29 14,12C14,12.71 13.62,13.37 13,13.73V10.27M11,10.27V13.73C10.38,13.37 10,12.71 10,12C10,11.29 10.38,10.63 11,10.27Z"
              />
            </svg>
            <p className="text-sm">Matches</p>
          </button>
          <button className="w-full cursor-pointer hover:text-yellow-300 focus:text-yellow-300">
            <svg className="w-8 mx-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z"
              />
            </svg>
            <p className="text-sm">Team</p>
          </button>
          <button className="w-full cursor-pointer hover:text-yellow-300 focus:text-yellow-300">
            <svg className="w-8 mx-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
              />
            </svg>
            <p className="text-sm">Calendar</p>
          </button>
          <button className="w-full cursor-pointer hover:text-yellow-300 focus:text-yellow-300">
            <svg className="w-8 mx-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
              />
            </svg>
            <p className="text-sm">Profile</p>
          </button>
        </footer>
      </div>
    );
};

export default App;
