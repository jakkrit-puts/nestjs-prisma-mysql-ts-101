import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './app/database/database.module';
import { ProductsModule } from './app/products/products.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [DatabaseModule, ProductsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
