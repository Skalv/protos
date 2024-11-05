import { MsgCreate, MsgPut, MsgTake } from "./tx";
export const registry = [["/regen.ecocredit.basket.v1.MsgCreate", MsgCreate], ["/regen.ecocredit.basket.v1.MsgPut", MsgPut], ["/regen.ecocredit.basket.v1.MsgTake", MsgTake]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value: MsgCreate.encode(value).finish()
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: MsgPut.encode(value).finish()
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: MsgTake.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value
            };
        }
    },
    fromPartial: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value: MsgCreate.fromPartial(value)
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: MsgPut.fromPartial(value)
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: MsgTake.fromPartial(value)
            };
        }
    }
};
