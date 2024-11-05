import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.deployments = this.deployments.bind(this);
        this.deployment = this.deployment.bind(this);
        this.group = this.group.bind(this);
    }
    deployments(request) {
        const data = QueryDeploymentsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployments", data);
        return promise.then(data => QueryDeploymentsResponse.decode(new BinaryReader(data)));
    }
    deployment(request) {
        const data = QueryDeploymentRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployment", data);
        return promise.then(data => QueryDeploymentResponse.decode(new BinaryReader(data)));
    }
    group(request) {
        const data = QueryGroupRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Group", data);
        return promise.then(data => QueryGroupResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
