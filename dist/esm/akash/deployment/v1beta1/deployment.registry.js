//@ts-nocheck
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
export const registry = [["/akash.deployment.v1beta1.MsgCreateDeployment", MsgCreateDeployment], ["/akash.deployment.v1beta1.MsgDepositDeployment", MsgDepositDeployment], ["/akash.deployment.v1beta1.MsgUpdateDeployment", MsgUpdateDeployment], ["/akash.deployment.v1beta1.MsgCloseDeployment", MsgCloseDeployment], ["/akash.deployment.v1beta1.MsgCloseGroup", MsgCloseGroup], ["/akash.deployment.v1beta1.MsgPauseGroup", MsgPauseGroup], ["/akash.deployment.v1beta1.MsgStartGroup", MsgStartGroup]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
                value: MsgCreateDeployment.encode(value).finish()
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
                value: MsgDepositDeployment.encode(value).finish()
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
                value: MsgUpdateDeployment.encode(value).finish()
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
                value: MsgCloseDeployment.encode(value).finish()
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
                value: MsgCloseGroup.encode(value).finish()
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
                value: MsgPauseGroup.encode(value).finish()
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
                value: MsgStartGroup.encode(value).finish()
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
                value: MsgCreateDeployment.fromPartial(value)
            };
        },
        depositDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
                value: MsgDepositDeployment.fromPartial(value)
            };
        },
        updateDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
                value: MsgUpdateDeployment.fromPartial(value)
            };
        },
        closeDeployment(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
                value: MsgCloseDeployment.fromPartial(value)
            };
        },
        closeGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
                value: MsgCloseGroup.fromPartial(value)
            };
        },
        pauseGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
                value: MsgPauseGroup.fromPartial(value)
            };
        },
        startGroup(value) {
            return {
                typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
                value: MsgStartGroup.fromPartial(value)
            };
        }
    }
};
