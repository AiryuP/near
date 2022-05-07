import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { WaresModule } from './wares/wares.module';

@Module({
  imports: [PostsModule, AuthModule, UserModule, LoginModule, WaresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
