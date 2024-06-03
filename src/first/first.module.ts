/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';

@Module({
  imports: [],
  exports: [],
  providers: [],
  controllers: [FirstController],
})
export class FirstModule {}
