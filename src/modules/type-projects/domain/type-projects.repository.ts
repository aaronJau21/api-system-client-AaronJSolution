import { IBaseRepository } from 'src/shared/global.repository';
import { ProductTypeEntity } from './product-type.entity';
import { ResponseTypeProjectsDto } from '../infrastructure/dto/response.dto';

export interface ITypeProjectsRepository
  extends IBaseRepository<ProductTypeEntity> {
  getAll(): Promise<ResponseTypeProjectsDto[]>;
}
