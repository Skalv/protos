import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.certificates = this.certificates.bind(this);
    }
    certificates(request) {
        const data = QueryCertificatesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
        return promise.then(data => QueryCertificatesResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        certificates(request) {
            return queryService.certificates(request);
        }
    };
};
