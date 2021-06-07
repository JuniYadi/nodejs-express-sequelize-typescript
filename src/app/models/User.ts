import {
  Table,
  Column,
  DataType,
  Model,
  IsUUID,
  PrimaryKey,
  Unique,
  IsEmail,
  Default,
  AllowNull,
  NotEmpty,
} from "sequelize-typescript";
import * as uuid from "uuid";

export enum userRole {
  admin = "admin",
  user = "user",
}

@Table({
  timestamps: true,
})
export class User extends Model {
  @PrimaryKey
  @Default(uuid.v4)
  @IsUUID(4)
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.TEXT)
  password!: string;

  @AllowNull(false)
  @NotEmpty
  @Default(userRole.user)
  @Column(DataType.STRING)
  role!: userRole;

  @AllowNull(true)
  @Column(DataType.TEXT)
  apiToken?: string;
}
