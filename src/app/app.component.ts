
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

  }
  title = 'demoPrintingAPI';
  f!: File;
  url!: any;
  responseData!: Blob;

  public loadObjFile() {
    //create new file
    while (document.querySelectorAll('canvas').length != 0) {
      document.getElementsByTagName('canvas')[0].remove();
    }
    var scene = new THREE.Scene();
    //create background
    scene.background = new THREE.Color(0xf7f8f9);
    var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = 1620;
    camera.position.x = -800;
    camera.position.y = 400;


    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(1000, 600);
    document.body.appendChild(renderer.domElement);
    var can = document.querySelector('canvas');
    can!.style.position = 'absolute';
    can!.style.top = "100px";
    can!.style.left = "20%";


    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 82%)'), 1.0);
    keyLight.position.set(-50, 0, 100);
    scene.add(keyLight);

    var objLoader = new OBJLoader();
    objLoader.load('assets/truck.obj', function (object: any) {

      scene.add(object);
    });

    var animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

  }
  public loadObjFileFromAPI() {
    var start = new Date().getTime();
    //create new file
    while (document.querySelectorAll('canvas').length != 0) {
      document.getElementsByTagName('canvas')[0].remove();
    }
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f8f9);
    // var mtlLoader = new MaterialLoader();
    var camera = new THREE.PerspectiveCamera(70, window.innerWidth / 2 / window.innerHeight / 0.5, 1, 1000);
    camera.position.z = 420;
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(450, 450);
    document.body.appendChild(renderer.domElement);
    var can = document.querySelector('canvas');
    can!.style.position = 'absolute';
    can!.style.top = "100px";
    can!.style.left = "20%";


    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 82%)'), 1.0);
    keyLight.position.set(-50, 0, 100);
    scene.add(keyLight);

    var objLoader = new OBJLoader();
    //load from api
    // objLoader.load(linkurl, function (object: any) {
    //   scene.add(object);
    // });


    var animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

  }






}
