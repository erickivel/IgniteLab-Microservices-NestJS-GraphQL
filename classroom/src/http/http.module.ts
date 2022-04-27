import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

import { DatabaseModule } from '../database/database.module';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollment.resolver';
import { CoursesService } from '../services/courses.service';
import { StudentsService } from '../services/students.service';
import { EnrollmentsService } from '../services/enrollments.service';

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
    //Resolvers
    StudentsResolver,
    CoursesResolver,
    EnrollmentsResolver,

    //Services
    StudentsService,
    CoursesService,
    EnrollmentsService,
  ],
})
export class HttpModule {}
