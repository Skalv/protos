import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.accounts = this.accounts.bind(this);
        this.account = this.account.bind(this);
        this.params = this.params.bind(this);
        this.moduleAccounts = this.moduleAccounts.bind(this);
        this.bech32Prefix = this.bech32Prefix.bind(this);
        this.addressBytesToString = this.addressBytesToString.bind(this);
        this.addressStringToBytes = this.addressStringToBytes.bind(this);
    }
    accounts(request = {
        pagination: undefined
    }) {
        const data = QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
        return promise.then(data => QueryAccountsResponse.decode(new BinaryReader(data)));
    }
    account(request) {
        const data = QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
        return promise.then(data => QueryAccountResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    moduleAccounts(request = {}) {
        const data = QueryModuleAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
        return promise.then(data => QueryModuleAccountsResponse.decode(new BinaryReader(data)));
    }
    bech32Prefix(request = {}) {
        const data = Bech32PrefixRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
        return promise.then(data => Bech32PrefixResponse.decode(new BinaryReader(data)));
    }
    addressBytesToString(request) {
        const data = AddressBytesToStringRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
        return promise.then(data => AddressBytesToStringResponse.decode(new BinaryReader(data)));
    }
    addressStringToBytes(request) {
        const data = AddressStringToBytesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
        return promise.then(data => AddressStringToBytesResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        accounts(request) {
            return queryService.accounts(request);
        },
        account(request) {
            return queryService.account(request);
        },
        params(request) {
            return queryService.params(request);
        },
        moduleAccounts(request) {
            return queryService.moduleAccounts(request);
        },
        bech32Prefix(request) {
            return queryService.bech32Prefix(request);
        },
        addressBytesToString(request) {
            return queryService.addressBytesToString(request);
        },
        addressStringToBytes(request) {
            return queryService.addressStringToBytes(request);
        }
    };
};
