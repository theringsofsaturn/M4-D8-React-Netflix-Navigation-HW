import { useEffect } from "react";

const showDetail = () => {};
const [info, setInfo] = useState(null);

useEffect(() => {
  const getMovieData = async () => {
    let id = match.params.MovieID;
    if (id) {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=c82e0eba" + id
      );
      let movieInfo = await response.json();
    }
  };
}, []);