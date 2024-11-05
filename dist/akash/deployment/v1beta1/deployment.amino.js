"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const group_1 = require("./group");
const deployment_1 = require("./deployment");
exports.AminoConverter = {
    "/akash.deployment.v1beta1.MsgCreateDeployment": {
        aminoType: "/akash.deployment.v1beta1.MsgCreateDeployment",
        toAmino: deployment_1.MsgCreateDeployment.toAmino,
        fromAmino: deployment_1.MsgCreateDeployment.fromAmino
    },
    "/akash.deployment.v1beta1.MsgDepositDeployment": {
        aminoType: "/akash.deployment.v1beta1.MsgDepositDeployment",
        toAmino: deployment_1.MsgDepositDeployment.toAmino,
        fromAmino: deployment_1.MsgDepositDeployment.fromAmino
    },
    "/akash.deployment.v1beta1.MsgUpdateDeployment": {
        aminoType: "/akash.deployment.v1beta1.MsgUpdateDeployment",
        toAmino: deployment_1.MsgUpdateDeployment.toAmino,
        fromAmino: deployment_1.MsgUpdateDeployment.fromAmino
    },
    "/akash.deployment.v1beta1.MsgCloseDeployment": {
        aminoType: "/akash.deployment.v1beta1.MsgCloseDeployment",
        toAmino: deployment_1.MsgCloseDeployment.toAmino,
        fromAmino: deployment_1.MsgCloseDeployment.fromAmino
    },
    "/akash.deployment.v1beta1.MsgCloseGroup": {
        aminoType: "/akash.deployment.v1beta1.MsgCloseGroup",
        toAmino: group_1.MsgCloseGroup.toAmino,
        fromAmino: group_1.MsgCloseGroup.fromAmino
    },
    "/akash.deployment.v1beta1.MsgPauseGroup": {
        aminoType: "/akash.deployment.v1beta1.MsgPauseGroup",
        toAmino: group_1.MsgPauseGroup.toAmino,
        fromAmino: group_1.MsgPauseGroup.fromAmino
    },
    "/akash.deployment.v1beta1.MsgStartGroup": {
        aminoType: "/akash.deployment.v1beta1.MsgStartGroup",
        toAmino: group_1.MsgStartGroup.toAmino,
        fromAmino: group_1.MsgStartGroup.fromAmino
    }
};
