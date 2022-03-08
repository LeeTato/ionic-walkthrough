import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public photos: UserPhoto[] = [];

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
