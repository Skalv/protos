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
        const data = query_1.QueryByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ByIRI", data);
        return promise.then(data => query_1.QueryByIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
    byHash(request) {
        const data = query_1.QueryByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ByHash", data);
        return promise.then(data => query_1.QueryByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    byAttestor(request) {
        const data = query_1.QueryByAttestorRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ByAttestor", data);
        return promise.then(data => query_1.QueryByAttestorResponse.decode(new binary_1.BinaryReader(data)));
    }
    iRIByHash(request) {
        const data = query_1.QueryIRIByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "IRIByHash", data);
        return promise.then(data => query_1.QueryIRIByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    iRIByRawHash(request) {
        const data = query_1.QueryIRIByRawHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "IRIByRawHash", data);
        return promise.then(data => query_1.QueryIRIByRawHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    iRIByGraphHash(request) {
        const data = query_1.QueryIRIByGraphHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "IRIByGraphHash", data);
        return promise.then(data => query_1.QueryIRIByGraphHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    hashByIRI(request) {
        const data = query_1.QueryHashByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "HashByIRI", data);
        return promise.then(data => query_1.QueryHashByIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
    attestorsByIRI(request) {
        const data = query_1.QueryAttestorsByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestorsByIRI", data);
        return promise.then(data => query_1.QueryAttestorsByIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
    attestorsByHash(request) {
        const data = query_1.QueryAttestorsByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestorsByHash", data);
        return promise.then(data => query_1.QueryAttestorsByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    resolversByIRI(request) {
        const data = query_1.QueryResolversByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByIRI", data);
        return promise.then(data => query_1.QueryResolversByIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
    resolversByHash(request) {
        const data = query_1.QueryResolversByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByHash", data);
        return promise.then(data => query_1.QueryResolversByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    resolverInfo(request) {
        const data = query_1.QueryResolverInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolverInfo", data);
        return promise.then(data => query_1.QueryResolverInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
