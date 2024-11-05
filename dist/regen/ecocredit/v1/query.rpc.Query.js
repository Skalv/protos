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
        this.classes = this.classes.bind(this);
        this.classesByAdmin = this.classesByAdmin.bind(this);
        this.class = this.class.bind(this);
        this.classIssuers = this.classIssuers.bind(this);
        this.projects = this.projects.bind(this);
        this.projectsByReferenceId = this.projectsByReferenceId.bind(this);
        this.project = this.project.bind(this);
        this.batches = this.batches.bind(this);
        this.batchesByIssuer = this.batchesByIssuer.bind(this);
        this.batchesByClass = this.batchesByClass.bind(this);
        this.batch = this.batch.bind(this);
        this.balance = this.balance.bind(this);
        this.balances = this.balances.bind(this);
        this.supply = this.supply.bind(this);
        this.creditTypes = this.creditTypes.bind(this);
        this.params = this.params.bind(this);
    }
    classes(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Classes", data);
        return promise.then(data => query_1.QueryClassesResponse.decode(new binary_1.BinaryReader(data)));
    }
    classesByAdmin(request) {
        const data = query_1.QueryClassesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassesByAdmin", data);
        return promise.then(data => query_1.QueryClassesByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    class(request) {
        const data = query_1.QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Class", data);
        return promise.then(data => query_1.QueryClassResponse.decode(new binary_1.BinaryReader(data)));
    }
    classIssuers(request) {
        const data = query_1.QueryClassIssuersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassIssuers", data);
        return promise.then(data => query_1.QueryClassIssuersResponse.decode(new binary_1.BinaryReader(data)));
    }
    projects(request) {
        const data = query_1.QueryProjectsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Projects", data);
        return promise.then(data => query_1.QueryProjectsResponse.decode(new binary_1.BinaryReader(data)));
    }
    projectsByReferenceId(request) {
        const data = query_1.QueryProjectsByReferenceIdRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByReferenceId", data);
        return promise.then(data => query_1.QueryProjectsByReferenceIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    project(request) {
        const data = query_1.QueryProjectRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Project", data);
        return promise.then(data => query_1.QueryProjectResponse.decode(new binary_1.BinaryReader(data)));
    }
    batches(request) {
        const data = query_1.QueryBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batches", data);
        return promise.then(data => query_1.QueryBatchesResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchesByIssuer(request) {
        const data = query_1.QueryBatchesByIssuerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByIssuer", data);
        return promise.then(data => query_1.QueryBatchesByIssuerResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchesByClass(request) {
        const data = query_1.QueryBatchesByClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByClass", data);
        return promise.then(data => query_1.QueryBatchesByClassResponse.decode(new binary_1.BinaryReader(data)));
    }
    batch(request) {
        const data = query_1.QueryBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batch", data);
        return promise.then(data => query_1.QueryBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    balance(request) {
        const data = query_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balance", data);
        return promise.then(data => query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    balances(request) {
        const data = query_1.QueryBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balances", data);
        return promise.then(data => query_1.QueryBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    supply(request) {
        const data = query_1.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Supply", data);
        return promise.then(data => query_1.QuerySupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    creditTypes(request = {}) {
        const data = query_1.QueryCreditTypesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "CreditTypes", data);
        return promise.then(data => query_1.QueryCreditTypesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        classes(request) {
            return queryService.classes(request);
        },
        classesByAdmin(request) {
            return queryService.classesByAdmin(request);
        },
        class(request) {
            return queryService.class(request);
        },
        classIssuers(request) {
            return queryService.classIssuers(request);
        },
        projects(request) {
            return queryService.projects(request);
        },
        projectsByReferenceId(request) {
            return queryService.projectsByReferenceId(request);
        },
        project(request) {
            return queryService.project(request);
        },
        batches(request) {
            return queryService.batches(request);
        },
        batchesByIssuer(request) {
            return queryService.batchesByIssuer(request);
        },
        batchesByClass(request) {
            return queryService.batchesByClass(request);
        },
        batch(request) {
            return queryService.batch(request);
        },
        balance(request) {
            return queryService.balance(request);
        },
        balances(request) {
            return queryService.balances(request);
        },
        supply(request) {
            return queryService.supply(request);
        },
        creditTypes(request) {
            return queryService.creditTypes(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
