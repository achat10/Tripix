import { Query, Resolver } from "type-graphql";

@Resolver()
export class InitialResolver{
    @Query(()=> String)
    Ultimate(){
        return "It is what it is"
    }
    @Query(()=> [String])
    Takeaway(){
        return ["First","Second", "Third"]
    }

}