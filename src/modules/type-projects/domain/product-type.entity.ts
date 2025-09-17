export const PRODUCT_TYPE = Symbol('PRODUCT_TYPE');

export class ProductTypeEntity {
  constructor(
    public readonly id: number | undefined,
    public readonly name: string,
    public readonly user_id: number,
  ) {}
}
