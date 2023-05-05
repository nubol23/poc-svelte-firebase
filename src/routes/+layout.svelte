<script>
    import { onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { app } from '../stores/firebase.ts'

    function initialize() {
      const firebaseConfig = {
        apiKey: "AIzaSyBW91SIU7BJibx3QqILqxELzvPLZi66ijY",
        authDomain: "auth-service-poc.firebaseapp.com",
        projectId: "auth-service-poc",
        storageBucket: "auth-service-poc.appspot.com",
        messagingSenderId: "643771071297",
        appId: "1:643771071297:web:0aaa84254dfa6f768b3fc0"
      };

      $app = initializeApp(firebaseConfig);
    }

    onMount(initialize);
</script>

<slot></slot>