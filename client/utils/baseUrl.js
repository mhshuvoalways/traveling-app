let baseUrl = "";

if (process.env.NODE_ENV === "production") {
  baseUrl = "https://traveling-app-q4bj.onrender.com";
} else {
  baseUrl = "http://localhost:5000";
}

export default baseUrl;
