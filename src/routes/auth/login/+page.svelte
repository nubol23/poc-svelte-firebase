<script>
  import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

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
</form>
