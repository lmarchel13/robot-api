import { MongooseModule } from '@nestjs/mongoose';

export const mongoConnection = URL => {
  return MongooseModule.forRoot(URL);
};
