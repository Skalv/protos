"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
    }
    userValidatorPreferences(request) {
        const data = query_1.UserValidatorPreferencesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Query", "UserValidatorPreferences", data);
        return promise.then(data => query_1.UserValidatorPreferencesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        userValidatorPreferences(request) {
            return queryService.userValidatorPreferences(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
