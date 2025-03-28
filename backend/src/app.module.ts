import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLoggerService } from './common/logger.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.local',
        }),
        AuthModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService, CustomLoggerService],
    exports: [CustomLoggerService],
})
export class AppModule {}
