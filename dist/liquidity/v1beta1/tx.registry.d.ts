import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch, MsgDirectSwap } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        depositWithinBatch(value: MsgDepositWithinBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawWithinBatch(value: MsgWithdrawWithinBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        swap(value: MsgSwapWithinBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        directSwap(value: MsgDirectSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        depositWithinBatch(value: MsgDepositWithinBatch): {
            typeUrl: string;
            value: MsgDepositWithinBatch;
        };
        withdrawWithinBatch(value: MsgWithdrawWithinBatch): {
            typeUrl: string;
            value: MsgWithdrawWithinBatch;
        };
        swap(value: MsgSwapWithinBatch): {
            typeUrl: string;
            value: MsgSwapWithinBatch;
        };
        directSwap(value: MsgDirectSwap): {
            typeUrl: string;
            value: MsgDirectSwap;
        };
    };
    fromPartial: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        depositWithinBatch(value: MsgDepositWithinBatch): {
            typeUrl: string;
            value: MsgDepositWithinBatch;
        };
        withdrawWithinBatch(value: MsgWithdrawWithinBatch): {
            typeUrl: string;
            value: MsgWithdrawWithinBatch;
        };
        swap(value: MsgSwapWithinBatch): {
            typeUrl: string;
            value: MsgSwapWithinBatch;
        };
        directSwap(value: MsgDirectSwap): {
            typeUrl: string;
            value: MsgDirectSwap;
        };
    };
};
