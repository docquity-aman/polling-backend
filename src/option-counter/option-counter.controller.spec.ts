import { Test, TestingModule } from '@nestjs/testing';
import { OptionCounterController } from './option-counter.controller';
import { OptionCounterService } from './option-counter.service';

describe('OptionCounterController', () => {
  let controller: OptionCounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionCounterController],
      providers: [OptionCounterService],
    }).compile();

    controller = module.get<OptionCounterController>(OptionCounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
