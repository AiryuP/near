import { Test, TestingModule } from '@nestjs/testing';
import { WaresController } from './wares.controller';
import { WaresService } from './wares.service';

describe('WaresController', () => {
  let controller: WaresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaresController],
      providers: [WaresService],
    }).compile();

    controller = module.get<WaresController>(WaresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
