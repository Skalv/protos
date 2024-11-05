import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface EventCreateVault {
    sender: string;
    collateralType: string;
}
export interface EventCreateVaultProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.EventCreateVault";
    value: Uint8Array;
}
export interface EventCreateVaultAmino {
    sender?: string;
    collateral_type?: string;
}
export interface EventCreateVaultAminoMsg {
    type: "/comdex.vault.v1beta1.EventCreateVault";
    value: EventCreateVaultAmino;
}
export interface EventCreateVaultSDKType {
    sender: string;
    collateral_type: string;
}
export interface EventDepositCollateral {
    owner: string;
    collateralType: string;
    collateral: Coin;
}
export interface EventDepositCollateralProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.EventDepositCollateral";
    value: Uint8Array;
}
export interface EventDepositCollateralAmino {
    owner?: string;
    collateral_type?: string;
    collateral?: CoinAmino;
}
export interface EventDepositCollateralAminoMsg {
    type: "/comdex.vault.v1beta1.EventDepositCollateral";
    value: EventDepositCollateralAmino;
}
export interface EventDepositCollateralSDKType {
    owner: string;
    collateral_type: string;
    collateral: CoinSDKType;
}
export interface EventWithdrawCollateral {
    owner: string;
    collateralType: string;
    collateral: Coin;
}
export interface EventWithdrawCollateralProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.EventWithdrawCollateral";
    value: Uint8Array;
}
export interface EventWithdrawCollateralAmino {
    owner?: string;
    collateral_type?: string;
    collateral?: CoinAmino;
}
export interface EventWithdrawCollateralAminoMsg {
    type: "/comdex.vault.v1beta1.EventWithdrawCollateral";
    value: EventWithdrawCollateralAmino;
}
export interface EventWithdrawCollateralSDKType {
    owner: string;
    collateral_type: string;
    collateral: CoinSDKType;
}
export interface EventDrawDebt {
    owner: string;
    collateralType: string;
    debt: Coin;
}
export interface EventDrawDebtProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.EventDrawDebt";
    value: Uint8Array;
}
export interface EventDrawDebtAmino {
    owner?: string;
    collateral_type?: string;
    debt?: CoinAmino;
}
export interface EventDrawDebtAminoMsg {
    type: "/comdex.vault.v1beta1.EventDrawDebt";
    value: EventDrawDebtAmino;
}
export interface EventDrawDebtSDKType {
    owner: string;
    collateral_type: string;
    debt: CoinSDKType;
}
export interface EventRepayDebt {
    owner: string;
    collateralType: string;
    debt: Coin;
}
export interface EventRepayDebtProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.EventRepayDebt";
    value: Uint8Array;
}
export interface EventRepayDebtAmino {
    owner?: string;
    collateral_type?: string;
    debt?: CoinAmino;
}
export interface EventRepayDebtAminoMsg {
    type: "/comdex.vault.v1beta1.EventRepayDebt";
    value: EventRepayDebtAmino;
}
export interface EventRepayDebtSDKType {
    owner: string;
    collateral_type: string;
    debt: CoinSDKType;
}
export interface EventCloseVault {
    owner: string;
    collateralType: string;
}
export interface EventCloseVaultProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.EventCloseVault";
    value: Uint8Array;
}
export interface EventCloseVaultAmino {
    owner?: string;
    collateral_type?: string;
}
export interface EventCloseVaultAminoMsg {
    type: "/comdex.vault.v1beta1.EventCloseVault";
    value: EventCloseVaultAmino;
}
export interface EventCloseVaultSDKType {
    owner: string;
    collateral_type: string;
}
export declare const EventCreateVault: {
    typeUrl: string;
    encode(message: EventCreateVault, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateVault;
    fromPartial(object: Partial<EventCreateVault>): EventCreateVault;
    fromAmino(object: EventCreateVaultAmino): EventCreateVault;
    toAmino(message: EventCreateVault): EventCreateVaultAmino;
    fromAminoMsg(object: EventCreateVaultAminoMsg): EventCreateVault;
    fromProtoMsg(message: EventCreateVaultProtoMsg): EventCreateVault;
    toProto(message: EventCreateVault): Uint8Array;
    toProtoMsg(message: EventCreateVault): EventCreateVaultProtoMsg;
};
export declare const EventDepositCollateral: {
    typeUrl: string;
    encode(message: EventDepositCollateral, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventDepositCollateral;
    fromPartial(object: Partial<EventDepositCollateral>): EventDepositCollateral;
    fromAmino(object: EventDepositCollateralAmino): EventDepositCollateral;
    toAmino(message: EventDepositCollateral): EventDepositCollateralAmino;
    fromAminoMsg(object: EventDepositCollateralAminoMsg): EventDepositCollateral;
    fromProtoMsg(message: EventDepositCollateralProtoMsg): EventDepositCollateral;
    toProto(message: EventDepositCollateral): Uint8Array;
    toProtoMsg(message: EventDepositCollateral): EventDepositCollateralProtoMsg;
};
export declare const EventWithdrawCollateral: {
    typeUrl: string;
    encode(message: EventWithdrawCollateral, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawCollateral;
    fromPartial(object: Partial<EventWithdrawCollateral>): EventWithdrawCollateral;
    fromAmino(object: EventWithdrawCollateralAmino): EventWithdrawCollateral;
    toAmino(message: EventWithdrawCollateral): EventWithdrawCollateralAmino;
    fromAminoMsg(object: EventWithdrawCollateralAminoMsg): EventWithdrawCollateral;
    fromProtoMsg(message: EventWithdrawCollateralProtoMsg): EventWithdrawCollateral;
    toProto(message: EventWithdrawCollateral): Uint8Array;
    toProtoMsg(message: EventWithdrawCollateral): EventWithdrawCollateralProtoMsg;
};
export declare const EventDrawDebt: {
    typeUrl: string;
    encode(message: EventDrawDebt, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventDrawDebt;
    fromPartial(object: Partial<EventDrawDebt>): EventDrawDebt;
    fromAmino(object: EventDrawDebtAmino): EventDrawDebt;
    toAmino(message: EventDrawDebt): EventDrawDebtAmino;
    fromAminoMsg(object: EventDrawDebtAminoMsg): EventDrawDebt;
    fromProtoMsg(message: EventDrawDebtProtoMsg): EventDrawDebt;
    toProto(message: EventDrawDebt): Uint8Array;
    toProtoMsg(message: EventDrawDebt): EventDrawDebtProtoMsg;
};
export declare const EventRepayDebt: {
    typeUrl: string;
    encode(message: EventRepayDebt, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRepayDebt;
    fromPartial(object: Partial<EventRepayDebt>): EventRepayDebt;
    fromAmino(object: EventRepayDebtAmino): EventRepayDebt;
    toAmino(message: EventRepayDebt): EventRepayDebtAmino;
    fromAminoMsg(object: EventRepayDebtAminoMsg): EventRepayDebt;
    fromProtoMsg(message: EventRepayDebtProtoMsg): EventRepayDebt;
    toProto(message: EventRepayDebt): Uint8Array;
    toProtoMsg(message: EventRepayDebt): EventRepayDebtProtoMsg;
};
export declare const EventCloseVault: {
    typeUrl: string;
    encode(message: EventCloseVault, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCloseVault;
    fromPartial(object: Partial<EventCloseVault>): EventCloseVault;
    fromAmino(object: EventCloseVaultAmino): EventCloseVault;
    toAmino(message: EventCloseVault): EventCloseVaultAmino;
    fromAminoMsg(object: EventCloseVaultAminoMsg): EventCloseVault;
    fromProtoMsg(message: EventCloseVaultProtoMsg): EventCloseVault;
    toProto(message: EventCloseVault): Uint8Array;
    toProtoMsg(message: EventCloseVault): EventCloseVaultProtoMsg;
};
