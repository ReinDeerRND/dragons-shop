export class DragonDto {
  name: string;
  feature?: string;
}

export class Dragon extends DragonDto {
  id: number;
}