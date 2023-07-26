import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateProfile'
})
export class UpdateProfilePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
