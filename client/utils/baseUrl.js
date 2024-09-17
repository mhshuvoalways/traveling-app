let baseUrl = "";

if (process.env.NODE_ENV === "production") {
  baseUrl = "https://traveling-app-api.vercel.app";
} else {
  baseUrl = "http://localhost:5000";
}

export default baseUrl;
