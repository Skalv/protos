import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClassesRequest, QueryClassesResponse, QueryClassesByAdminRequest, QueryClassesByAdminResponse, QueryClassRequest, QueryClassResponse, QueryClassIssuersRequest, QueryClassIssuersResponse, QueryProjectsRequest, QueryProjectsResponse, QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponse, QueryProjectRequest, QueryProjectResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponse, QueryBatchesByClassRequest, QueryBatchesByClassResponse, QueryBatchRequest, QueryBatchResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalancesRequest, QueryBalancesResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Classes", data);
        return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
    }
    classesByAdmin(request) {
        const data = QueryClassesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassesByAdmin", data);
        return promise.then(data => QueryClassesByAdminResponse.decode(new BinaryReader(data)));
    }
    class(request) {
        const data = QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Class", data);
        return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
    }
    classIssuers(request) {
        const data = QueryClassIssuersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassIssuers", data);
        return promise.then(data => QueryClassIssuersResponse.decode(new BinaryReader(data)));
    }
    projects(request) {
        const data = QueryProjectsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Projects", data);
        return promise.then(data => QueryProjectsResponse.decode(new BinaryReader(data)));
    }
    projectsByReferenceId(request) {
        const data = QueryProjectsByReferenceIdRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByReferenceId", data);
        return promise.then(data => QueryProjectsByReferenceIdResponse.decode(new BinaryReader(data)));
    }
    project(request) {
        const data = QueryProjectRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Project", data);
        return promise.then(data => QueryProjectResponse.decode(new BinaryReader(data)));
    }
    batches(request) {
        const data = QueryBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batches", data);
        return promise.then(data => QueryBatchesResponse.decode(new BinaryReader(data)));
    }
    batchesByIssuer(request) {
        const data = QueryBatchesByIssuerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByIssuer", data);
        return promise.then(data => QueryBatchesByIssuerResponse.decode(new BinaryReader(data)));
    }
    batchesByClass(request) {
        const data = QueryBatchesByClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByClass", data);
        return promise.then(data => QueryBatchesByClassResponse.decode(new BinaryReader(data)));
    }
    batch(request) {
        const data = QueryBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batch", data);
        return promise.then(data => QueryBatchResponse.decode(new BinaryReader(data)));
    }
    balance(request) {
        const data = QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balance", data);
        return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
    }
    balances(request) {
        const data = QueryBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balances", data);
        return promise.then(data => QueryBalancesResponse.decode(new BinaryReader(data)));
    }
    supply(request) {
        const data = QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Supply", data);
        return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
    }
    creditTypes(request = {}) {
        const data = QueryCreditTypesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "CreditTypes", data);
        return promise.then(data => QueryCreditTypesResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
