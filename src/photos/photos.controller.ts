import { PhotosService } from './photos.service';
import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('photos')
export class PhotosController {
  private photosServ: PhotosService;
  constructor(photosServ: PhotosService) {
    this.photosServ = photosServ;
  }
  @Get()
  async getPhotos(@Query() query, @Param() params) {
    console.log(query, params);
    return await this.photosServ.getPhotos();
  }
}
