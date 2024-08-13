import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //const app = await NestFactory.create<NestExpressApplication>(AppModule); //NestExpressApplication | NestFastifyApplication (express or fastify)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
