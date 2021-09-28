// Gets the URL for the current environment
export const getAbsoluteURL = (path) => {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  return path ? baseURL + path : baseURL;
};
