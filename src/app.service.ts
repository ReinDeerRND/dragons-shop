import { Injectable } from '@nestjs/common';
import { DragonDto, Dragon} from './model/dragon.dto';

@Injectable()
export class AppService {
  _dragons: Dragon[] = [
    {
      id: 0,
      name: 'Fire',
      feature: 'Likes fire',
    },
    {
      id: 1,
      name: 'Nana',
      feature: 'Likes kids',
    },
  ];

  getDragons(): Dragon[] {
    return this._dragons;
  }

  getDragon(id: number): Dragon | null {
    let dragon: Dragon;
    this._dragons.forEach((item) => {
      if (item.id === id) {
        dragon = item;
      }
    });

    return dragon;
  }

  createDragon(item: DragonDto): Dragon {
    let id = (this._dragons[this._dragons.length - 1].id + 1) | 0;
    let dragon = {
      ...item,
      id,
    };
    this._dragons.push(dragon);
    return dragon;
  }

  updateDragon(id: number, body: DragonDto): Dragon | null {
    this._dragons = this._dragons.map((d) => {
      if (id === d.id) {
        return {
          ...d,
          ...body,
        };
      } else return d;
    });

    let dragon = this.getDragon(id);
    return dragon;
  }

  removeDragon(id: number) {
    this._dragons = this._dragons.filter((d) => d.id !== id);
  }
}
