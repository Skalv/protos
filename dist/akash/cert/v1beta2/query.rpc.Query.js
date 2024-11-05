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
        this.certificates = this.certificates.bind(this);
    }
    certificates(request) {
        const data = query_1.QueryCertificatesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
        return promise.then(data => query_1.QueryCertificatesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        certificates(request) {
            return queryService.certificates(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
