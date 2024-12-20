import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
    }
    userValidatorPreferences(request) {
        const data = UserValidatorPreferencesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Query", "UserValidatorPreferences", data);
        return promise.then(data => UserValidatorPreferencesResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        userValidatorPreferences(request) {
            return queryService.userValidatorPreferences(request);
        }
    };
};
