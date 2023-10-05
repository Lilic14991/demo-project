import { Test, TestingModule } from '@nestjs/testing';
import { ManifestationsController } from './manifestations.controller';

describe('ManifestationsController', () => {
  let controller: ManifestationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManifestationsController],
    }).compile();

    controller = module.get<ManifestationsController>(ManifestationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
