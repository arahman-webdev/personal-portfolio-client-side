// lib/auth.js (or similar utility file)

import { cookies } from "next/headers";


export async function getUserDataWithTokens() {

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_token")?.value; 

  if (!sessionToken) {

    return { user: null, refreshToken: null };
  }

  try {

    const response = await fetch("https://abdurrahman-dev-portfolio-backend.vercel.app/api/user/me", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${sessionToken}`,
        "Content-Type": "application/json",
      },

      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch user data:", response.statusText);
      return { user: null, refreshToken: null };
    }

    const data = await response.json();


    return {
      user: data.user, 
      refreshToken: data.refreshToken, 
    };

  } catch (error) {
    console.error("Error fetching user data:", error);
    return { user: null, refreshToken: null };
  }
}