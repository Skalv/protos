"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
//@ts-nocheck
const group_1 = require("./group");
const binary_1 = require("../../../binary");
const deployment_1 = require("./deployment");
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
        const data = deployment_1.MsgCreateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CreateDeployment", data);
        return promise.then(data => deployment_1.MsgCreateDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    depositDeployment(request) {
        const data = deployment_1.MsgDepositDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "DepositDeployment", data);
        return promise.then(data => deployment_1.MsgDepositDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateDeployment(request) {
        const data = deployment_1.MsgUpdateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "UpdateDeployment", data);
        return promise.then(data => deployment_1.MsgUpdateDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    closeDeployment(request) {
        const data = deployment_1.MsgCloseDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseDeployment", data);
        return promise.then(data => deployment_1.MsgCloseDeploymentResponse.decode(new binary_1.BinaryReader(data)));
    }
    closeGroup(request) {
        const data = group_1.MsgCloseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseGroup", data);
        return promise.then(data => group_1.MsgCloseGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    pauseGroup(request) {
        const data = group_1.MsgPauseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "PauseGroup", data);
        return promise.then(data => group_1.MsgPauseGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    startGroup(request) {
        const data = group_1.MsgStartGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "StartGroup", data);
        return promise.then(data => group_1.MsgStartGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
