import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateService } from './Services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce2';
  constructor(private swUpdate : SwUpdate){
    this.initServiceWorker();
  }

  initServiceWorker(){

    if(!this.swUpdate.isEnabled){
 
      console.log('Not enabled');
 
      return;
 
    }
 
    this.swUpdate.versionUpdates.subscribe((event)=>{
 
      if(confirm('An update is available. Would you like to update?')){
 
        this.swUpdate.activateUpdate().then(()=>location.reload);
 
      }
 
    })
 
    
 
   }
}
