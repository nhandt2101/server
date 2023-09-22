import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class User {
  @Prop()
  name: string

  @Prop({
    default: null
  })
  email: string

  @Prop({ default: null })
  age: number

  @Prop({ required: true })
  username: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true, default: false })
  softDelete: Boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
export type UserDocument = User & Document