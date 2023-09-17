export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/dashboard", "/calculator"] //all the pages protected by signin
}