
import { RestBase, JsonProperty } from "libs/ng-data-rest";

export default class GroupModel extends RestBase{
    @JsonProperty({})
    parent: string
    children: string[]
    @JsonProperty({})
    name: string
}
