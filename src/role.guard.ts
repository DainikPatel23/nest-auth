import { CanActivate, ExecutionContext } from '@nestjs/common';

export class RoleGuard implements CanActivate {
  private rolePassed: string;
  constructor(role: string) {
    this.rolePassed = role;
  }
  canActivate(context: ExecutionContext): boolean {
    const cxt = context.switchToHttp();
    const request: any = cxt.getRequest<Request>();
    return this.rolePassed === request.user.role;
  }
}
