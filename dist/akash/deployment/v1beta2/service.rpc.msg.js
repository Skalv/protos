"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const deploymentmsg_1 = require("./deploymentmsg");
const groupmsg_1 = require("./groupmsg");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createDeployment = this.createDeployment.bind(this);
        this.depositDeployment = this.depositDeployment.bind(this);
        this.updateDeployment = this.updateDeployment.bind(this);
        this.closeDeployment = this.closeDeployment.bind(this);
        this.closeGroup = this.closeGroup.bind(this);
        this.pauseGroup = this.pauseGroup.bind(this);
        this.startGroup = this.startGroup.bind(this);
    }
    createDeployment(request) {
        const data = deploymentmsg_1.MsgCreateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CreateDeployment", data);
        return promise.then(data => deploymentmsg_1.MsgCreateDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    depositDeployment(request) {
        const data = deploymentmsg_1.MsgDepositDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "DepositDeployment", data);
        return promise.then(data => deploymentmsg_1.MsgDepositDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateDeployment(request) {
        const data = deploymentmsg_1.MsgUpdateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "UpdateDeployment", data);
        return promise.then(data => deploymentmsg_1.MsgUpdateDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    closeDeployment(request) {
        const data = deploymentmsg_1.MsgCloseDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseDeployment", data);
        return promise.then(data => deploymentmsg_1.MsgCloseDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    closeGroup(request) {
        const data = groupmsg_1.MsgCloseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseGroup", data);
        return promise.then(data => groupmsg_1.MsgCloseGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    pauseGroup(request) {
        const data = groupmsg_1.MsgPauseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "PauseGroup", data);
        return promise.then(data => groupmsg_1.MsgPauseGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    startGroup(request) {
        const data = groupmsg_1.MsgStartGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "StartGroup", data);
        return promise.then(data => groupmsg_1.MsgStartGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
