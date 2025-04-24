/**
 * This function extracts the error message from an error object.
 */
import axios from "axios";

/**
 * @param error 
 * @returns returns the error message as a string.
 */
export const extractErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.Error || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}
