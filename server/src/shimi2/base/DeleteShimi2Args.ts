/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { Shimi2WhereUniqueInput } from "./Shimi2WhereUniqueInput";

@ArgsType()
class DeleteShimi2Args {
  @Field(() => Shimi2WhereUniqueInput, { nullable: false })
  where!: Shimi2WhereUniqueInput;
}

export { DeleteShimi2Args };
