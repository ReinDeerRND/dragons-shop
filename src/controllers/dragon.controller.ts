import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DragonDto, Dragon } from 'src/model/dragon.dto';

@Controller('dragons')
export class DragonController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDragons(): Dragon[] {
    return this.appService.getDragons();
  }

  @Get(':id')
  getPostById(@Param('id') id: string): Dragon | string {
    let dragon = this.appService.getDragon(+id);
    if (dragon) {
      return dragon;
    } else return `The dragon with id ${id} doesn't exist`;
  }

  @Post()
  async create(@Body() body: DragonDto) {
    const dragon = this.appService.createDragon(body);
    return dragon;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: DragonDto) {
    let updateDragon = this.appService.updateDragon(+id, body);
    console.log('updateDragon', updateDragon);
    return updateDragon;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.appService.removeDragon(id);
  }
}
