import { BinaryReader } from "../../../binary";
import { MsgCreateDeployment, MsgCreateDeploymentResponse, MsgDepositDeployment, MsgDepositDeploymentResponse, MsgUpdateDeployment, MsgUpdateDeploymentResponse, MsgCloseDeployment, MsgCloseDeploymentResponse } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupResponse, MsgPauseGroup, MsgPauseGroupResponse, MsgStartGroup, MsgStartGroupResponse } from "./groupmsg";
export class MsgClientImpl {
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
        const data = MsgCreateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CreateDeployment", data);
        return promise.then(data => MsgCreateDeploymentResponse.decode(new BinaryReader(data)));
    }
    depositDeployment(request) {
        const data = MsgDepositDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "DepositDeployment", data);
        return promise.then(data => MsgDepositDeploymentResponse.decode(new BinaryReader(data)));
    }
    updateDeployment(request) {
        const data = MsgUpdateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "UpdateDeployment", data);
        return promise.then(data => MsgUpdateDeploymentResponse.decode(new BinaryReader(data)));
    }
    closeDeployment(request) {
        const data = MsgCloseDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseDeployment", data);
        return promise.then(data => MsgCloseDeploymentResponse.decode(new BinaryReader(data)));
    }
    closeGroup(request) {
        const data = MsgCloseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseGroup", data);
        return promise.then(data => MsgCloseGroupResponse.decode(new BinaryReader(data)));
    }
    pauseGroup(request) {
        const data = MsgPauseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "PauseGroup", data);
        return promise.then(data => MsgPauseGroupResponse.decode(new BinaryReader(data)));
    }
    startGroup(request) {
        const data = MsgStartGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "StartGroup", data);
        return promise.then(data => MsgStartGroupResponse.decode(new BinaryReader(data)));
    }
}
