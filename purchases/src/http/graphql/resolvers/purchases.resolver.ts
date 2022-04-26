import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { PurchasesService } from '../../../services/purchases.service';
import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { Purchase } from '../models/purchase';

@Resolver()
export class PurchasesResolver {
  constructor(private purchasesService: PurchasesService) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchasesService.listAllPurchases();
  }
}
