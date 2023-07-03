<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div class="home_container">
    <nav>
      <qa-toolbar />
    </nav>
    <div class="content_container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <footer class="navbar">
      <qa-menu />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { FCM } from '@capacitor-community/fcm';

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

import { onMounted } from 'vue';
import QaMenu from '../components/QaMenu.vue';
import QaToolbar from '../components/QaToolbar.vue';

onMounted(() => {
  console.log('Initializing HomePage');

  // Request permission to use push notifications
  // iOS will prompt user and return if they granted permission or not
  // Android will just grant without prompting
  PushNotifications.requestPermissions().then(async (result) => {
    if (result.receive === 'granted') {
      // Register with Apple / Google to receive push via APNS/FCM
      await PushNotifications.register();
      FCM.subscribeTo({ topic: 'igreja' })
        .then((r) => console.log('subscribed to topic'))
        .catch((err) => console.log(err));

      FCM.setAutoInit({ enabled: true }).then(() =>
        console.log('Auto init enabled')
      );

      FCM.isAutoInitEnabled().then((r) => {
        console.log('Auto init is ' + (r.enabled ? 'enabled' : 'disabled'));
      });
    } else {
      // Show some error
    }
  });

  PushNotifications.addListener('registration', (token: Token) => {
    console.log('Push registration success, token: ' + token.value);
  });

  PushNotifications.addListener('registrationError', (error: any) => {
    console.log('Error on registration: ' + JSON.stringify(error));
  });

  PushNotifications.addListener(
    'pushNotificationReceived',
    (notification: PushNotificationSchema) => {
      console.log('Push received: ' + JSON.stringify(notification));
    }
  );

  PushNotifications.addListener(
    'pushNotificationActionPerformed',
    (notification: ActionPerformed) => {
      console.log('Push action performed: ' + JSON.stringify(notification));
    }
  );
});
</script>

<style scoped>
.home_container {
  display: grid;
  flex-flow: column wrap;
  height: 100vh;
  grid-template-rows: 50px 1fr;
}

.content_container {
  overflow: auto;
}
</style>
