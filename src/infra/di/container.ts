/**
 * Dependency Injection Container
 */
import { container } from "tsyringe";
import { IMovieService } from "../interfaces/IMovieService";
import { MovieService } from "../services/movieService";
;

container.register<IMovieService>("IMovieService", { useClass: MovieService });
