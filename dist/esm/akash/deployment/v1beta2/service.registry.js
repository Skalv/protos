import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export const registry = [["/akash.deployment.v1beta2.MsgCreateDeployment", MsgCreateDeployment], ["/akash.deployment.v1beta2.MsgDepositDeployment", MsgDepositDeployment], ["/akash.deployment.v1beta2.MsgUpdateDeployment", MsgUpdateDeployment], ["/akash.deployment.v1beta2.MsgCloseDeployment", MsgCloseDeployment], ["/akash.deployment.v1beta2.MsgCloseGroup", MsgCloseGroup], ["/akash.deployment.v1beta2.MsgPauseGroup", MsgPauseGroup], ["/akash.deployment.v1beta2.MsgStartGroup", MsgStartGroup]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
                value: MsgCreateDeployment.encode(value).finish()
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
                value: MsgDepositDeployment.encode(value).finish()
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
                value: MsgUpdateDeployment.encode(value).finish()
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
                value: MsgCloseDeployment.encode(value).finish()
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
                value: MsgCloseGroup.encode(value).finish()
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
                value: MsgPauseGroup.encode(value).finish()
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
                value: MsgStartGroup.encode(value).finish()
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
                value: MsgCreateDeployment.fromPartial(value)
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
                value: MsgDepositDeployment.fromPartial(value)
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
                value: MsgUpdateDeployment.fromPartial(value)
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
                value: MsgCloseDeployment.fromPartial(value)
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
                value: MsgCloseGroup.fromPartial(value)
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
                value: MsgPauseGroup.fromPartial(value)
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
                value: MsgStartGroup.fromPartial(value)
            };
        }
    }
};
