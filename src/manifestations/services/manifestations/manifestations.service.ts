import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manifestations } from 'src/manifestations/manifestations.entity';
import { Repository } from 'typeorm';
import { CreateManifestationDto } from '../../dtos/create-manifestation.dto';

@Injectable()
export class ManifestationsService {
    constructor(
        @InjectRepository(Manifestations)
        private readonly manifestationsRepository: 
        Repository<Manifestations>) {}

    async create(dto: CreateManifestationDto): Promise<Manifestations | null> {

        const manifestation = this.manifestationsRepository.create(dto);

        return await this.manifestationsRepository.save(manifestation);
    }

    async getAll(){
        return await this.manifestationsRepository.find();
    }

    async getById(@Param('id') id: number): Promise<Manifestations | null> {
            return await this.manifestationsRepository.findOneBy({id});
        }

}
