<script>
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
  import {goto} from "$app/navigation";

  let email = "";
  let password = "";
  let confirmPassword = "";

  function handleRegisterEmailAndPassword(event) {
    event.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        sendEmailVerification(auth.currentUser)
          .then(() => {
            goto("login");
          })
          .catch(() => {
            console.log("could not send verification email")
          })
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      })
  }
</script>

<form on:submit={handleRegisterEmailAndPassword}>
    <label>
        Email:
        <input type="email" bind:value={email} />
    </label>

    <label>
        Password:
        <input type="password" bind:value={password} />
    </label>

    <label>
        Confirm Password:
        <input type="password" bind:value={confirmPassword} />
    </label>

    <button type="submit">Register</button>
</form>
