import Card from "../components/Card";
import { getAllMovies } from "../data/movies";

export default function MovieList() {
  const movies = getAllMovies();
  console.log(movies);
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
