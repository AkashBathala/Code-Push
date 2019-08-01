import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CodePush, InstallMode } from '@ionic-native/code-push/ngx';
// import { AppCenterCrashes } from '@ionic-native/app-center-crashes/ngx'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'build'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private codePush: CodePush,
    // private AppCenterCrashes: AppCenterCrashes
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));
      const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
      this.codePush.sync({
        installMode: InstallMode.IMMEDIATE
      }, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));


      // this.AppCenterCrashes.setEnabled(true).then(() => {
      //   this.AppCenterCrashes.lastSessionCrashReport().then(report => {
      //     console.log('Crash report', report);
      //   });
      // });
    });
  }
}
