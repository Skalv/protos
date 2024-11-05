import { MsgCreateVestingAccount } from "./tx";
export const registry = [["/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createVestingAccount(value) {
            return {
                typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
                value: MsgCreateVestingAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createVestingAccount(value) {
            return {
                typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
                value
            };
        }
    },
    fromPartial: {
        createVestingAccount(value) {
            return {
                typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
                value: MsgCreateVestingAccount.fromPartial(value)
            };
        }
    }
};
