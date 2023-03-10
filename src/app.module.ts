import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollModule } from './poll/poll.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll/entities/poll.entity';
import { PollRespModule } from './poll-resp/poll-resp.module';
import { PollResp } from './poll-resp/entities/poll-resp.entity';
// import { PollSocketModule } from './poll-socket/poll-socket.module';
import { OptionCounterModule } from './option-counter/option-counter.module';
import { OptionCounter } from './option-counter/entities/option-counter.entity';
const entities = [Poll, PollResp, OptionCounter];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
    }),
    PollModule,
    PollRespModule,
    OptionCounterModule,
    // PollSocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
