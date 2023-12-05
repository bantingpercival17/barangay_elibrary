<template>
  <ion-app>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="read" href="/read">
          <ion-icon :icon="book"></ion-icon>
          <ion-label>READ</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="write" href="/write">
          <ion-icon :icon="create"></ion-icon>
          <ion-label>WRITE</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="listen" href="/listen">
          <ion-icon :icon="volumeHigh"></ion-icon>
          <ion-label>LISTEN</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="mic">
          <ion-icon :icon="mic"></ion-icon>
          <ion-label>SPEAK</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>


  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue';
import { book, create, volumeHigh, mic } from 'ionicons/icons';
export default {
  components: {
    IonApp, IonRouterOutlet, IonApp,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  }, data() {
    return {
      book,
      create,
      volumeHigh,
      mic,
    };
  },
}
</script>
