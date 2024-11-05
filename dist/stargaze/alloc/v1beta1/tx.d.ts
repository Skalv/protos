import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    startTime: bigint;
    endTime: bigint;
    delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
    from_address?: string;
    to_address?: string;
    amount?: CoinAmino[];
    start_time?: string;
    end_time?: string;
    delayed?: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    start_time: bigint;
    end_time: bigint;
    delayed: boolean;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
    fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount;
    toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino;
    fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount;
    fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount;
    toProto(message: MsgCreateVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg;
};
export declare const MsgCreateVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
    fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse;
    toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse;
    fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse;
    toProto(message: MsgCreateVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg;
};
