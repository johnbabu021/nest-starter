import { Inject, Injectable } from '@nestjs/common';
import { Cats } from 'src/eli/interfaces/cats.interface';

@Injectable()
export class EliService {
  // @Inject('HTTP_OPTIONS')
  private readonly cats: Cats[] = [];

  public create(cat: Cats) {
    this.cats.push(cat);
    return cat;
  }
  public findAll(): Cats[] {
    return this.cats;
  }
}
