// lib/auth.js (or similar utility file)

import { cookies } from "next/headers";
// Import your backend API client (e.g., axios or fetch wrapper)

export async function getUserDataWithTokens() {
  // 1. Get the authentication token/session ID from cookies
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_token")?.value; // Adjust cookie name

  if (!sessionToken) {
    // User is not logged in
    return { user: null, refreshToken: null };
  }

  try {
    // 2. Call your backend API to get user details and the refresh token
    const response = await fetch("https://abdurrahman-dev-portfolio-backend.vercel.app/api/user/me", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${sessionToken}`,
        "Content-Type": "application/json",
      },
      // Cache-control might be necessary depending on your setup
      cache: "no-store", // Crucial for dynamic, per-request data like user info
    });

    if (!response.ok) {
      // Handle expired or invalid token (e.g., clear cookies or redirect)
      // For this example, we'll just return null
      console.error("Failed to fetch user data:", response.statusText);
      return { user: null, refreshToken: null };
    }

    const data = await response.json();

    // 3. Extract the necessary data (ensure your backend *sends* the refresh token securely)
    return {
      user: data.user, // The user object (name, email, etc.)
      refreshToken: data.refreshToken, // The refresh token itself
    };

  } catch (error) {
    console.error("Error fetching user data:", error);
    return { user: null, refreshToken: null };
  }
}