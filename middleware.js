import { NextResponse } from "next/server";

export function middleware(request) {
  let user = request.cookies.get("user")?.value;
  let role;
  if (user) {
    role = JSON.parse(user).role;
  }
  let allowedRoles = ["Manager", "Moderator", "Admin"];
  if (
    request.nextUrl.pathname.startsWith("/login") &&
    allowedRoles.includes(role)
  ) {
    const loginUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(loginUrl);
  } else if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !allowedRoles.includes(role)
  ) {
    // Store the original destination in a query parameter
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    // Redirect the user to the login page
    return NextResponse.redirect(loginUrl);
  } else if (
    request.nextUrl.pathname.includes("/admin-settings") &&
    role !== "Admin"
  ) {
    const loginUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(loginUrl);
  }
}
