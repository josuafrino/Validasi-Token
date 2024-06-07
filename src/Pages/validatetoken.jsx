export default function validateToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.setItem("token", null);
  }
  return token;
}
