import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
    accounts: Account[];
    payments: FractionalPayment[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.escrow.v1beta2.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateAmino {
    accounts: AccountAmino[];
    payments: FractionalPaymentAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/akash.escrow.v1beta2.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
    accounts: AccountSDKType[];
    payments: FractionalPaymentSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
