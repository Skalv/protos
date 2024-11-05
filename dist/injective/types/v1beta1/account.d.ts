import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
    $typeUrl?: "/injective.types.v1beta1.EthAccount";
    baseAccount?: BaseAccount;
    codeHash: Uint8Array;
}
export interface EthAccountProtoMsg {
    typeUrl: "/injective.types.v1beta1.EthAccount";
    value: Uint8Array;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountAmino {
    base_account?: BaseAccountAmino;
    code_hash?: string;
}
export interface EthAccountAminoMsg {
    type: "/injective.types.v1beta1.EthAccount";
    value: EthAccountAmino;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountSDKType {
    $typeUrl?: "/injective.types.v1beta1.EthAccount";
    base_account?: BaseAccountSDKType;
    code_hash: Uint8Array;
}
export declare const EthAccount: {
    typeUrl: string;
    encode(message: EthAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EthAccount;
    fromPartial(object: Partial<EthAccount>): EthAccount;
    fromAmino(object: EthAccountAmino): EthAccount;
    toAmino(message: EthAccount): EthAccountAmino;
    fromAminoMsg(object: EthAccountAminoMsg): EthAccount;
    fromProtoMsg(message: EthAccountProtoMsg): EthAccount;
    toProto(message: EthAccount): Uint8Array;
    toProtoMsg(message: EthAccount): EthAccountProtoMsg;
};
