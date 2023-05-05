<script>
  import {getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
  import { GoogleAuthProvider } from "firebase/auth";
  const provider = new GoogleAuthProvider();

  let email = "rafael.rvp98@gmail.com";
  let password = "password1234";

  function handleLoginEmailAndPassword(event) {
    event.preventDefault();

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      })
  }

  function handleLoginGoogle() {
      const auth = getAuth()

      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              console.log(credential)
              console.log(result)
              // const token = credential.accessToken;
              // const user = result.user;
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
