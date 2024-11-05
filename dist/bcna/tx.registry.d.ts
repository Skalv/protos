import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createBitcannaid(value: MsgCreateBitcannaid): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBitcannaid(value: MsgUpdateBitcannaid): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteBitcannaid(value: MsgDeleteBitcannaid): {
            typeUrl: string;
            value: Uint8Array;
        };
        createSupplychain(value: MsgCreateSupplychain): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateSupplychain(value: MsgUpdateSupplychain): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteSupplychain(value: MsgDeleteSupplychain): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createBitcannaid(value: MsgCreateBitcannaid): {
            typeUrl: string;
            value: MsgCreateBitcannaid;
        };
        updateBitcannaid(value: MsgUpdateBitcannaid): {
            typeUrl: string;
            value: MsgUpdateBitcannaid;
        };
        deleteBitcannaid(value: MsgDeleteBitcannaid): {
            typeUrl: string;
            value: MsgDeleteBitcannaid;
        };
        createSupplychain(value: MsgCreateSupplychain): {
            typeUrl: string;
            value: MsgCreateSupplychain;
        };
        updateSupplychain(value: MsgUpdateSupplychain): {
            typeUrl: string;
            value: MsgUpdateSupplychain;
        };
        deleteSupplychain(value: MsgDeleteSupplychain): {
            typeUrl: string;
            value: MsgDeleteSupplychain;
        };
    };
    fromPartial: {
        createBitcannaid(value: MsgCreateBitcannaid): {
            typeUrl: string;
            value: MsgCreateBitcannaid;
        };
        updateBitcannaid(value: MsgUpdateBitcannaid): {
            typeUrl: string;
            value: MsgUpdateBitcannaid;
        };
        deleteBitcannaid(value: MsgDeleteBitcannaid): {
            typeUrl: string;
            value: MsgDeleteBitcannaid;
        };
        createSupplychain(value: MsgCreateSupplychain): {
            typeUrl: string;
            value: MsgCreateSupplychain;
        };
        updateSupplychain(value: MsgUpdateSupplychain): {
            typeUrl: string;
            value: MsgUpdateSupplychain;
        };
        deleteSupplychain(value: MsgDeleteSupplychain): {
            typeUrl: string;
            value: MsgDeleteSupplychain;
        };
    };
};
