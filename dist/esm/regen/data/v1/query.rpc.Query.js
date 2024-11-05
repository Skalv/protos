import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryByIRIRequest, QueryByIRIResponse, QueryByHashRequest, QueryByHashResponse, QueryByAttestorRequest, QueryByAttestorResponse, QueryIRIByHashRequest, QueryIRIByHashResponse, QueryIRIByRawHashRequest, QueryIRIByRawHashResponse, QueryIRIByGraphHashRequest, QueryIRIByGraphHashResponse, QueryHashByIRIRequest, QueryHashByIRIResponse, QueryAttestorsByIRIRequest, QueryAttestorsByIRIResponse, QueryAttestorsByHashRequest, QueryAttestorsByHashResponse, QueryResolversByIRIRequest, QueryResolversByIRIResponse, QueryResolversByHashRequest, QueryResolversByHashResponse, QueryResolverInfoRequest, QueryResolverInfoResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.byIRI = this.byIRI.bind(this);
        this.byHash = this.byHash.bind(this);
        this.byAttestor = this.byAttestor.bind(this);
        this.iRIByHash = this.iRIByHash.bind(this);
        this.iRIByRawHash = this.iRIByRawHash.bind(this);
        this.iRIByGraphHash = this.iRIByGraphHash.bind(this);
        this.hashByIRI = this.hashByIRI.bind(this);
        this.attestorsByIRI = this.attestorsByIRI.bind(this);
        this.attestorsByHash = this.attestorsByHash.bind(this);
        this.resolversByIRI = this.resolversByIRI.bind(this);
        this.resolversByHash = this.resolversByHash.bind(this);
        this.resolverInfo = this.resolverInfo.bind(this);
    }
    byIRI(request) {
        const data = QueryByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ByIRI", data);
        return promise.then(data => QueryByIRIResponse.decode(new BinaryReader(data)));
    }
    byHash(request) {
        const data = QueryByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ByHash", data);
        return promise.then(data => QueryByHashResponse.decode(new BinaryReader(data)));
    }
    byAttestor(request) {
        const data = QueryByAttestorRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ByAttestor", data);
        return promise.then(data => QueryByAttestorResponse.decode(new BinaryReader(data)));
    }
    iRIByHash(request) {
        const data = QueryIRIByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "IRIByHash", data);
        return promise.then(data => QueryIRIByHashResponse.decode(new BinaryReader(data)));
    }
    iRIByRawHash(request) {
        const data = QueryIRIByRawHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "IRIByRawHash", data);
        return promise.then(data => QueryIRIByRawHashResponse.decode(new BinaryReader(data)));
    }
    iRIByGraphHash(request) {
        const data = QueryIRIByGraphHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "IRIByGraphHash", data);
        return promise.then(data => QueryIRIByGraphHashResponse.decode(new BinaryReader(data)));
    }
    hashByIRI(request) {
        const data = QueryHashByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "HashByIRI", data);
        return promise.then(data => QueryHashByIRIResponse.decode(new BinaryReader(data)));
    }
    attestorsByIRI(request) {
        const data = QueryAttestorsByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestorsByIRI", data);
        return promise.then(data => QueryAttestorsByIRIResponse.decode(new BinaryReader(data)));
    }
    attestorsByHash(request) {
        const data = QueryAttestorsByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestorsByHash", data);
        return promise.then(data => QueryAttestorsByHashResponse.decode(new BinaryReader(data)));
    }
    resolversByIRI(request) {
        const data = QueryResolversByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByIRI", data);
        return promise.then(data => QueryResolversByIRIResponse.decode(new BinaryReader(data)));
    }
    resolversByHash(request) {
        const data = QueryResolversByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByHash", data);
        return promise.then(data => QueryResolversByHashResponse.decode(new BinaryReader(data)));
    }
    resolverInfo(request) {
        const data = QueryResolverInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolverInfo", data);
        return promise.then(data => QueryResolverInfoResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        byIRI(request) {
            return queryService.byIRI(request);
        },
        byHash(request) {
            return queryService.byHash(request);
        },
        byAttestor(request) {
            return queryService.byAttestor(request);
        },
        iRIByHash(request) {
            return queryService.iRIByHash(request);
        },
        iRIByRawHash(request) {
            return queryService.iRIByRawHash(request);
        },
        iRIByGraphHash(request) {
            return queryService.iRIByGraphHash(request);
        },
        hashByIRI(request) {
            return queryService.hashByIRI(request);
        },
        attestorsByIRI(request) {
            return queryService.attestorsByIRI(request);
        },
        attestorsByHash(request) {
            return queryService.attestorsByHash(request);
        },
        resolversByIRI(request) {
            return queryService.resolversByIRI(request);
        },
        resolversByHash(request) {
            return queryService.resolversByHash(request);
        },
        resolverInfo(request) {
            return queryService.resolverInfo(request);
        }
    };
};
