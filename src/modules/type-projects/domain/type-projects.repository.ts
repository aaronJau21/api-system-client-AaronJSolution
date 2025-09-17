import { IBaseRepository } from 'src/shared/global.repository';
import { ProductTypeEntity } from './product-type.entity';

export interface ITypeProjectsRepository
  extends IBaseRepository<ProductTypeEntity> {
  getAll(): Promise<ProductTypeEntity[]>;
}
