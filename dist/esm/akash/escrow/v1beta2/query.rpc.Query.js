import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.accounts = this.accounts.bind(this);
        this.payments = this.payments.bind(this);
    }
    accounts(request) {
        const data = QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Accounts", data);
        return promise.then(data => QueryAccountsResponse.decode(new BinaryReader(data)));
    }
    payments(request) {
        const data = QueryPaymentsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Payments", data);
        return promise.then(data => QueryPaymentsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
