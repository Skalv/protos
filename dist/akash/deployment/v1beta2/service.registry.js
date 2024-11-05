"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const deploymentmsg_1 = require("./deploymentmsg");
const groupmsg_1 = require("./groupmsg");
exports.registry = [["/akash.deployment.v1beta2.MsgCreateDeployment", deploymentmsg_1.MsgCreateDeployment], ["/akash.deployment.v1beta2.MsgDepositDeployment", deploymentmsg_1.MsgDepositDeployment], ["/akash.deployment.v1beta2.MsgUpdateDeployment", deploymentmsg_1.MsgUpdateDeployment], ["/akash.deployment.v1beta2.MsgCloseDeployment", deploymentmsg_1.MsgCloseDeployment], ["/akash.deployment.v1beta2.MsgCloseGroup", groupmsg_1.MsgCloseGroup], ["/akash.deployment.v1beta2.MsgPauseGroup", groupmsg_1.MsgPauseGroup], ["/akash.deployment.v1beta2.MsgStartGroup", groupmsg_1.MsgStartGroup]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
                value: deploymentmsg_1.MsgCreateDeployment.encode(value).finish()
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
                value: deploymentmsg_1.MsgDepositDeployment.encode(value).finish()
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
                value: deploymentmsg_1.MsgUpdateDeployment.encode(value).finish()
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
                value: deploymentmsg_1.MsgCloseDeployment.encode(value).finish()
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
                value: groupmsg_1.MsgCloseGroup.encode(value).finish()
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
                value: groupmsg_1.MsgPauseGroup.encode(value).finish()
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
                value: groupmsg_1.MsgStartGroup.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
                value
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
                value
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
                value
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
                value
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
                value
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
                value
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
                value
            };
        }
    },
    fromPartial: {
        createDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
                value: deploymentmsg_1.MsgCreateDeployment.fromPartial(value)
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
                value: deploymentmsg_1.MsgDepositDeployment.fromPartial(value)
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
                value: deploymentmsg_1.MsgUpdateDeployment.fromPartial(value)
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
                value: deploymentmsg_1.MsgCloseDeployment.fromPartial(value)
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
                value: groupmsg_1.MsgCloseGroup.fromPartial(value)
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
                value: groupmsg_1.MsgPauseGroup.fromPartial(value)
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
                value: groupmsg_1.MsgStartGroup.fromPartial(value)
            };
        }
    }
};
