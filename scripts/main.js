import { generateMoviesHTML } from "./movie-converter.js";
import { renderMoviesToDOM } from "./movie-render.js";

const moviesHTML = generateMoviesHTML();
renderMoviesToDOM(moviesHTML);
