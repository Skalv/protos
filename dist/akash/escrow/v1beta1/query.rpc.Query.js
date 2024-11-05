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
        this.accounts = this.accounts.bind(this);
        this.payments = this.payments.bind(this);
    }
    accounts(request) {
        const data = query_1.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Accounts", data);
        return promise.then(data => query_1.QueryAccountsResponse.decode(new binary_1.BinaryReader(data)));
    }
    payments(request) {
        const data = query_1.QueryPaymentsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Payments", data);
        return promise.then(data => query_1.QueryPaymentsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        accounts(request) {
            return queryService.accounts(request);
        },
        payments(request) {
            return queryService.payments(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
