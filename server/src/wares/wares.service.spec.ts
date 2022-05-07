import { Test, TestingModule } from '@nestjs/testing';
import { WaresService } from './wares.service';

describe('WaresService', () => {
  let service: WaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaresService],
    }).compile();

    service = module.get<WaresService>(WaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
