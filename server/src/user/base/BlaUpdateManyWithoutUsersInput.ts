/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BlaWhereUniqueInput } from "../../bla/base/BlaWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class BlaUpdateManyWithoutUsersInput {
  @Field(() => [BlaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BlaWhereUniqueInput],
  })
  connect?: Array<BlaWhereUniqueInput>;

  @Field(() => [BlaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BlaWhereUniqueInput],
  })
  disconnect?: Array<BlaWhereUniqueInput>;

  @Field(() => [BlaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BlaWhereUniqueInput],
  })
  set?: Array<BlaWhereUniqueInput>;
}
export { BlaUpdateManyWithoutUsersInput };
