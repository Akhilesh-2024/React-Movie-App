import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { searchRequest, getPopoularMovies } from "../Services/FetchApi";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopoularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed To Load Movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const searchResult = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchtitle = await searchRequest(searchQuery);
      setMovies(searchtitle);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failes to Search Movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={searchResult} className="search-form">
        <input
          type="text"
          placeholder="Enter Movie Name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
