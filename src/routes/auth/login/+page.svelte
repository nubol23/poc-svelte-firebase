<script>
  import {getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
  import { GoogleAuthProvider } from "firebase/auth";
  import {getJWTAndRedirect} from "../../../utils/auth.ts";
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      hd: "factored.ai",
  })

  let email = "rafael.rvp98@gmail.com";
  let password = "password1234";

  function handleLoginEmailAndPassword(event) {
    event.preventDefault();

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser.getIdToken().then((token) => {
          getJWTAndRedirect(token, auth.currentUser.email, auth.currentUser.displayName);
        })
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      })
  }

  function handleLoginGoogle() {
      const auth = getAuth()

      signInWithPopup(auth, provider)
          .then(() => {
            auth.currentUser.getIdToken().then((token) => {
                console.log(token)
              // getJWTAndRedirect(token, auth.currentUser.email, auth.currentUser.displayName);
            })
          }).catch((error) => {
          // Handle Errors here.
          console.log(error.code);
          console.log(error.message);
      });
  }
</script>

<form on:submit={handleLoginEmailAndPassword}>
    <label>
        Email:
        <input type="email" bind:value={email} />
    </label>

    <label>
        Password:
        <input type="password" bind:value={password} />
    </label>

    <button type="submit">Login</button>

    <button type="button" on:click={handleLoginGoogle}>Login with Google</button>
</form>
