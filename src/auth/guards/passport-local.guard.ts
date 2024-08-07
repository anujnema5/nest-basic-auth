import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class PassportLocalGuards extends AuthGuard('local') {}