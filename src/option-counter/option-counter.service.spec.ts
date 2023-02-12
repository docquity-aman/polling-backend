import { Test, TestingModule } from '@nestjs/testing';
import { OptionCounterService } from './option-counter.service';

describe('OptionCounterService', () => {
  let service: OptionCounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionCounterService],
    }).compile();

    service = module.get<OptionCounterService>(OptionCounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
