"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const deploymentmsg_1 = require("./deploymentmsg");
const groupmsg_1 = require("./groupmsg");
exports.AminoConverter = {
    "/akash.deployment.v1beta2.MsgCreateDeployment": {
        aminoType: "/akash.deployment.v1beta2.MsgCreateDeployment",
        toAmino: deploymentmsg_1.MsgCreateDeployment.toAmino,
        fromAmino: deploymentmsg_1.MsgCreateDeployment.fromAmino
    },
    "/akash.deployment.v1beta2.MsgDepositDeployment": {
        aminoType: "/akash.deployment.v1beta2.MsgDepositDeployment",
        toAmino: deploymentmsg_1.MsgDepositDeployment.toAmino,
        fromAmino: deploymentmsg_1.MsgDepositDeployment.fromAmino
    },
    "/akash.deployment.v1beta2.MsgUpdateDeployment": {
        aminoType: "/akash.deployment.v1beta2.MsgUpdateDeployment",
        toAmino: deploymentmsg_1.MsgUpdateDeployment.toAmino,
        fromAmino: deploymentmsg_1.MsgUpdateDeployment.fromAmino
    },
    "/akash.deployment.v1beta2.MsgCloseDeployment": {
        aminoType: "/akash.deployment.v1beta2.MsgCloseDeployment",
        toAmino: deploymentmsg_1.MsgCloseDeployment.toAmino,
        fromAmino: deploymentmsg_1.MsgCloseDeployment.fromAmino
    },
    "/akash.deployment.v1beta2.MsgCloseGroup": {
        aminoType: "/akash.deployment.v1beta2.MsgCloseGroup",
        toAmino: groupmsg_1.MsgCloseGroup.toAmino,
        fromAmino: groupmsg_1.MsgCloseGroup.fromAmino
    },
    "/akash.deployment.v1beta2.MsgPauseGroup": {
        aminoType: "/akash.deployment.v1beta2.MsgPauseGroup",
        toAmino: groupmsg_1.MsgPauseGroup.toAmino,
        fromAmino: groupmsg_1.MsgPauseGroup.fromAmino
    },
    "/akash.deployment.v1beta2.MsgStartGroup": {
        aminoType: "/akash.deployment.v1beta2.MsgStartGroup",
        toAmino: groupmsg_1.MsgStartGroup.toAmino,
        fromAmino: groupmsg_1.MsgStartGroup.fromAmino
    }
};
