//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch, MsgDirectSwap } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/liquidity.v1beta1.MsgCreatePool", MsgCreatePool], ["/liquidity.v1beta1.MsgDepositWithinBatch", MsgDepositWithinBatch], ["/liquidity.v1beta1.MsgWithdrawWithinBatch", MsgWithdrawWithinBatch], ["/liquidity.v1beta1.MsgSwapWithinBatch", MsgSwapWithinBatch], ["/liquidity.v1beta1.MsgDirectSwap", MsgDirectSwap]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    depositWithinBatch(value: MsgDepositWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
        value: MsgDepositWithinBatch.encode(value).finish()
      };
    },
    withdrawWithinBatch(value: MsgWithdrawWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
        value: MsgWithdrawWithinBatch.encode(value).finish()
      };
    },
    swap(value: MsgSwapWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
        value: MsgSwapWithinBatch.encode(value).finish()
      };
    },
    directSwap(value: MsgDirectSwap) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
        value: MsgDirectSwap.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgCreatePool",
        value
      };
    },
    depositWithinBatch(value: MsgDepositWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
        value
      };
    },
    withdrawWithinBatch(value: MsgWithdrawWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
        value
      };
    },
    swap(value: MsgSwapWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
        value
      };
    },
    directSwap(value: MsgDirectSwap) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
        value
      };
    }
  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    depositWithinBatch(value: MsgDepositWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
        value: MsgDepositWithinBatch.fromPartial(value)
      };
    },
    withdrawWithinBatch(value: MsgWithdrawWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
        value: MsgWithdrawWithinBatch.fromPartial(value)
      };
    },
    swap(value: MsgSwapWithinBatch) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
        value: MsgSwapWithinBatch.fromPartial(value)
      };
    },
    directSwap(value: MsgDirectSwap) {
      return {
        typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
        value: MsgDirectSwap.fromPartial(value)
      };
    }
  }
};