import { MsgCreateBalancerPool } from "./tx";
export const registry = [["/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool", MsgCreateBalancerPool]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value: MsgCreateBalancerPool.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value
            };
        }
    },
    fromPartial: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value: MsgCreateBalancerPool.fromPartial(value)
            };
        }
    }
};
