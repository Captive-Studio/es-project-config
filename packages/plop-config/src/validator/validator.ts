import type {} from 'plop';

export interface PlopValidator<T> {
  (input: any, answers?: T): boolean | string;
}

export interface PlopAsyncValidator<T> {
  (input: any, answers?: T): Promise<boolean | string>;
}
