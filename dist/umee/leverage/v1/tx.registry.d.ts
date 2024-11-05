import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSupply, MsgWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        supply(value: MsgSupply): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        collateralize(value: MsgCollateralize): {
            typeUrl: string;
            value: Uint8Array;
        };
        decollateralize(value: MsgDecollateralize): {
            typeUrl: string;
            value: Uint8Array;
        };
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: Uint8Array;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        supply(value: MsgSupply): {
            typeUrl: string;
            value: MsgSupply;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        collateralize(value: MsgCollateralize): {
            typeUrl: string;
            value: MsgCollateralize;
        };
        decollateralize(value: MsgDecollateralize): {
            typeUrl: string;
            value: MsgDecollateralize;
        };
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: MsgBorrow;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
        };
    };
    fromPartial: {
        supply(value: MsgSupply): {
            typeUrl: string;
            value: MsgSupply;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        collateralize(value: MsgCollateralize): {
            typeUrl: string;
            value: MsgCollateralize;
        };
        decollateralize(value: MsgDecollateralize): {
            typeUrl: string;
            value: MsgDecollateralize;
        };
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: MsgBorrow;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
        };
    };
};
