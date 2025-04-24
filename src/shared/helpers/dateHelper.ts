
// This file contains helper functions for date formatting.
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
};
