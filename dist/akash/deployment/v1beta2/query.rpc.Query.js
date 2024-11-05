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
        this.deployments = this.deployments.bind(this);
        this.deployment = this.deployment.bind(this);
        this.group = this.group.bind(this);
    }
    deployments(request) {
        const data = query_1.QueryDeploymentsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployments", data);
        return promise.then(data => query_1.QueryDeploymentsResponse.decode(new binary_1.BinaryReader(data)));
    }
    deployment(request) {
        const data = query_1.QueryDeploymentRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployment", data);
        return promise.then(data => query_1.QueryDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    group(request) {
        const data = query_1.QueryGroupRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Group", data);
        return promise.then(data => query_1.QueryGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        deployments(request) {
            return queryService.deployments(request);
        },
        deployment(request) {
            return queryService.deployment(request);
        },
        group(request) {
            return queryService.group(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
