"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
//@ts-nocheck
const group_1 = require("./group");
const deployment_1 = require("./deployment");
exports.registry = [["/akash.deployment.v1beta1.MsgCreateDeployment", deployment_1.MsgCreateDeployment], ["/akash.deployment.v1beta1.MsgDepositDeployment", deployment_1.MsgDepositDeployment], ["/akash.deployment.v1beta1.MsgUpdateDeployment", deployment_1.MsgUpdateDeployment], ["/akash.deployment.v1beta1.MsgCloseDeployment", deployment_1.MsgCloseDeployment], ["/akash.deployment.v1beta1.MsgCloseGroup", group_1.MsgCloseGroup], ["/akash.deployment.v1beta1.MsgPauseGroup", group_1.MsgPauseGroup], ["/akash.deployment.v1beta1.MsgStartGroup", group_1.MsgStartGroup]];
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
                typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
                value: deployment_1.MsgCreateDeployment.encode(value).finish()
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
                value: deployment_1.MsgDepositDeployment.encode(value).finish()
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
                value: deployment_1.MsgUpdateDeployment.encode(value).finish()
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
                value: deployment_1.MsgCloseDeployment.encode(value).finish()
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
                value: group_1.MsgCloseGroup.encode(value).finish()
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
                value: group_1.MsgPauseGroup.encode(value).finish()
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
                value: group_1.MsgStartGroup.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
                value
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
                value
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
                value
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
                value
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
                value
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
                value
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
                value
            };
        }
    },
    fromPartial: {
        createDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
                value: deployment_1.MsgCreateDeployment.fromPartial(value)
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
                value: deployment_1.MsgDepositDeployment.fromPartial(value)
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
                value: deployment_1.MsgUpdateDeployment.fromPartial(value)
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
                value: deployment_1.MsgCloseDeployment.fromPartial(value)
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
                value: group_1.MsgCloseGroup.fromPartial(value)
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
                value: group_1.MsgPauseGroup.fromPartial(value)
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
                value: group_1.MsgStartGroup.fromPartial(value)
            };
        }
    }
};
