import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000

  // add security with helmet
  app.use(helmet());
  app.enableCors();

  // load swagger doc
  // bootstrapSwagger({ app });

  await app.listen(port);
}
bootstrap();
