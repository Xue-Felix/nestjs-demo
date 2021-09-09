import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CatsModule, UserModule],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
