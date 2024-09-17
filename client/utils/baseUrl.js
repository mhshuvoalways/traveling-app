let baseUrl = "";

if (process.env.NODE_ENV === "production") {
  baseUrl = "https://travelbookingapi.vercel.app";
} else {
  baseUrl = "http://localhost:5000";
}

export default baseUrl;