import { Test, TestingModule } from '@nestjs/testing';
import { RatsController } from './rats.controller';

describe('RatsController', () => {
  let controller: RatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatsController],
    }).compile();

    controller = module.get<RatsController>(RatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
