   import { Component, ElementRef, ViewChild } from '@angular/core';
    import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
    import { AngularFireAuth } from 'angularfire2/auth'
    import { Geolocation } from '@ionic-native/geolocation';
    import {
      GoogleMaps,
      GoogleMap,
      GoogleMapsEvent,
      GoogleMapOptions,
      CameraPosition,
      MarkerOptions,
      Marker
     } from '@ionic-native/google-maps';

  //  declare var google :any;

// let restaurant =[
//      {name: 'Amman', lat:31.95638607801807 , lng:35.94535052776337 }
//    ]

//     let position;

  @IonicPage()
    @Component({
     selector: 'page-map',
     templateUrl: 'map.html',
})

      export class MapPage {
      //  @ViewChild('map') mapElement:ElementRef;
      //  map: any; 
      
      map: GoogleMap;
      mapElement: HTMLElement;
  constructor( 
   public navCtrl: NavController,
    public navParams: NavParams,
     public geolocation: Geolocation,
     private googleMaps: GoogleMaps) {

  }  

  ionViewDidLoad() {
    this.loadMap();
   }

   loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('Map is ready!');

      // Now you can use all methods safely.
      this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
        });

    });
}

  // initMap(){
       
//    this.geolocation.getCurrentPosition().then((position) => {
 
//      let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
//        let mapOptions = {
//          center: location,
//          zoom: 20,
//          mapTypeId: google.maps.MapTypeId.ROADMAP
        
//        }
 
//        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
//      });
 
//    }

//     ionViewDidLoad() {
//         this.initMap();
//         //     ///console.log(this.mapRef);
//         //     this.showMap();
//         //   }
//        console.log('your page ionViewDidLoad');
//  }



//      addMarker(){
     
//       let marker = new google.maps.Marker({
//         map: this.map,
//         animation: google.maps.Animation.DROP,
//         position: this.map.getCenter()
//       });


//         let content = "<h4>Information..</h4>";        
     
//       this.addInfoWindow(marker, content);
     
//     }
   
//     addInfoWindow(marker, content){
     
//       let infoWindow = new google.maps.InfoWindow({
//         content: content
//       });
     
//       google.maps.event.addListener(marker, 'click', () => {
//         infoWindow.open(this.map, marker);
//       });
     
//     }
//  findRestaurant() {
//     this.geolocation.getCurrentPosition().then(position => {
//       let location = new google.maps.LatLng(
//         position.coords.latitude,
//         position.coords.longitude
//       );
//       let result = {};
//       let min = 0;
//       let userLat = position.coords.latitude;
//       let userlong = position.coords.longitude;
//       let distance;
//       for(var i=0; i<restaurant.length; i++){
//         distance= ((userLat-restaurant[i].lat)**2+(userlong-restaurant[i].lng)**2)**0.5;
//         result[restaurant[i].name]=distance;
//       }
//       let arrayKeys = Object.keys(result)
//       let firstKey = arrayKeys[0]
//       min = result[firstKey] 
          
//       for(var key in result){
//         if(result[key]<min){
//           min = result[key];
//         }
//       }
//       for(var key in result){
//         if(result[key]===min){
//           let name = key
//         }
//       }
 
    
//     })
//    }
 }


 ///////////////google.maps.event.addListener(window, 'load', initMap);