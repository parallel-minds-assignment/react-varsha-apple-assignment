/**
 * this hook is used to get the movie service instance
 */
import { container } from "tsyringe";
import { IMovieService } from "../../infra/interfaces/IMovieService";

/**
 * @returns the movie service instance
 */
export const useMovieService = (): IMovieService =>
  
container.resolve<IMovieService>("IMovieService");
