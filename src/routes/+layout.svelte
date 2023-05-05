<script>
    import { onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { app } from '../stores/firebase.ts'
    import { env } from "$env/dynamic/public";

    function initialize() {
      const firebaseConfig = {
        apiKey: env.PUBLIC_API_KEY,
        authDomain: env.PUBLIC_AUTH_DOMAIN,
        projectId: env.PUBLIC_PROJECT_ID,
        storageBucket: env.PUBLIC_STORAGE_BUCKET,
        messagingSenderId: env.PUBLIC_MESSAGING_SENDER_ID,
        appId: env.PUBLIC_APP_ID
      };

      $app = initializeApp(firebaseConfig);
    }

    onMount(initialize);
</script>

<slot></slot>