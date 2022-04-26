import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

import { DatabaseModule } from '../database/database.module';
import { ProductsService } from '../services/products.service';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchasesService } from '../services/purchases.service';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Services
    ProductsService,
    PurchasesService,

    // Resolvers
    ProductsResolver,
    PurchasesResolver,
  ],
})
export class HttpModule {}
