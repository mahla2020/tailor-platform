export class UserDto {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly role: 'tailor' | 'customer';
}
