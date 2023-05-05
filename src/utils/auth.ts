import { env } from '$env/dynamic/public'

export function getJWTAndRedirect(idToken: string, email: string, name = "") {
  return fetch(`${env.PUBLIC_AUTH_BACKEND_URL}/token`, {
    method: "POST",
    body: JSON.stringify({
      id_token: idToken,
      email,
      name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const queryParams = new URLSearchParams({
        accessToken: data.access_token
      })
      // Force external redirect
      window.location.href = `${env.PUBLIC_MAIN_APP_URL}?${queryParams.toString()}`
    })
    .catch((error) => {
      console.log(error.error)
    })
}