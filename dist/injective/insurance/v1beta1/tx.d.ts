import { OracleType } from "../../oracle/v1beta1/oracle";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFund {
    /** Creator of the insurance fund. */
    sender: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** Coin denom to use for the market quote denom */
    quoteDenom: string;
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Oracle type */
    oracleType: OracleType;
    /** Expiration time of the market. Should be -1 for perpetual markets. */
    expiry: bigint;
    /** Initial deposit of the insurance fund */
    initialDeposit: Coin;
}
export interface MsgCreateInsuranceFundProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
    value: Uint8Array;
}
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFundAmino {
    /** Creator of the insurance fund. */
    sender?: string;
    /** Ticker for the derivative market. */
    ticker?: string;
    /** Coin denom to use for the market quote denom */
    quote_denom?: string;
    /** Oracle base currency */
    oracle_base?: string;
    /** Oracle quote currency */
    oracle_quote?: string;
    /** Oracle type */
    oracle_type?: OracleType;
    /** Expiration time of the market. Should be -1 for perpetual markets. */
    expiry?: string;
    /** Initial deposit of the insurance fund */
    initial_deposit?: CoinAmino;
}
export interface MsgCreateInsuranceFundAminoMsg {
    type: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
    value: MsgCreateInsuranceFundAmino;
}
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFundSDKType {
    sender: string;
    ticker: string;
    quote_denom: string;
    oracle_base: string;
    oracle_quote: string;
    oracle_type: OracleType;
    expiry: bigint;
    initial_deposit: CoinSDKType;
}
export interface MsgCreateInsuranceFundResponse {
}
export interface MsgCreateInsuranceFundResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
    value: Uint8Array;
}
export interface MsgCreateInsuranceFundResponseAmino {
}
export interface MsgCreateInsuranceFundResponseAminoMsg {
    type: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
    value: MsgCreateInsuranceFundResponseAmino;
}
export interface MsgCreateInsuranceFundResponseSDKType {
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwrite {
    /** Address of the underwriter. */
    sender: string;
    /** MarketID of the insurance fund. */
    marketId: string;
    /** Amount of quote_denom to underwrite the insurance fund. */
    deposit: Coin;
}
export interface MsgUnderwriteProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite";
    value: Uint8Array;
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwriteAmino {
    /** Address of the underwriter. */
    sender?: string;
    /** MarketID of the insurance fund. */
    market_id?: string;
    /** Amount of quote_denom to underwrite the insurance fund. */
    deposit?: CoinAmino;
}
export interface MsgUnderwriteAminoMsg {
    type: "/injective.insurance.v1beta1.MsgUnderwrite";
    value: MsgUnderwriteAmino;
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwriteSDKType {
    sender: string;
    market_id: string;
    deposit: CoinSDKType;
}
export interface MsgUnderwriteResponse {
}
export interface MsgUnderwriteResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
    value: Uint8Array;
}
export interface MsgUnderwriteResponseAmino {
}
export interface MsgUnderwriteResponseAminoMsg {
    type: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
    value: MsgUnderwriteResponseAmino;
}
export interface MsgUnderwriteResponseSDKType {
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemption {
    /** Address of the underwriter requesting a redemption. */
    sender: string;
    /** MarketID of the insurance fund. */
    marketId: string;
    /** Insurance fund share token amount to be redeemed. */
    amount: Coin;
}
export interface MsgRequestRedemptionProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption";
    value: Uint8Array;
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemptionAmino {
    /** Address of the underwriter requesting a redemption. */
    sender?: string;
    /** MarketID of the insurance fund. */
    market_id?: string;
    /** Insurance fund share token amount to be redeemed. */
    amount?: CoinAmino;
}
export interface MsgRequestRedemptionAminoMsg {
    type: "/injective.insurance.v1beta1.MsgRequestRedemption";
    value: MsgRequestRedemptionAmino;
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemptionSDKType {
    sender: string;
    market_id: string;
    amount: CoinSDKType;
}
export interface MsgRequestRedemptionResponse {
}
export interface MsgRequestRedemptionResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
    value: Uint8Array;
}
export interface MsgRequestRedemptionResponseAmino {
}
export interface MsgRequestRedemptionResponseAminoMsg {
    type: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
    value: MsgRequestRedemptionResponseAmino;
}
export interface MsgRequestRedemptionResponseSDKType {
}
export declare const MsgCreateInsuranceFund: {
    typeUrl: string;
    encode(message: MsgCreateInsuranceFund, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFund;
    fromPartial(object: Partial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund;
    fromAmino(object: MsgCreateInsuranceFundAmino): MsgCreateInsuranceFund;
    toAmino(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundAmino;
    fromAminoMsg(object: MsgCreateInsuranceFundAminoMsg): MsgCreateInsuranceFund;
    fromProtoMsg(message: MsgCreateInsuranceFundProtoMsg): MsgCreateInsuranceFund;
    toProto(message: MsgCreateInsuranceFund): Uint8Array;
    toProtoMsg(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundProtoMsg;
};
export declare const MsgCreateInsuranceFundResponse: {
    typeUrl: string;
    encode(_: MsgCreateInsuranceFundResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFundResponse;
    fromPartial(_: Partial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse;
    fromAmino(_: MsgCreateInsuranceFundResponseAmino): MsgCreateInsuranceFundResponse;
    toAmino(_: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseAmino;
    fromAminoMsg(object: MsgCreateInsuranceFundResponseAminoMsg): MsgCreateInsuranceFundResponse;
    fromProtoMsg(message: MsgCreateInsuranceFundResponseProtoMsg): MsgCreateInsuranceFundResponse;
    toProto(message: MsgCreateInsuranceFundResponse): Uint8Array;
    toProtoMsg(message: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseProtoMsg;
};
export declare const MsgUnderwrite: {
    typeUrl: string;
    encode(message: MsgUnderwrite, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwrite;
    fromPartial(object: Partial<MsgUnderwrite>): MsgUnderwrite;
    fromAmino(object: MsgUnderwriteAmino): MsgUnderwrite;
    toAmino(message: MsgUnderwrite): MsgUnderwriteAmino;
    fromAminoMsg(object: MsgUnderwriteAminoMsg): MsgUnderwrite;
    fromProtoMsg(message: MsgUnderwriteProtoMsg): MsgUnderwrite;
    toProto(message: MsgUnderwrite): Uint8Array;
    toProtoMsg(message: MsgUnderwrite): MsgUnderwriteProtoMsg;
};
export declare const MsgUnderwriteResponse: {
    typeUrl: string;
    encode(_: MsgUnderwriteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwriteResponse;
    fromPartial(_: Partial<MsgUnderwriteResponse>): MsgUnderwriteResponse;
    fromAmino(_: MsgUnderwriteResponseAmino): MsgUnderwriteResponse;
    toAmino(_: MsgUnderwriteResponse): MsgUnderwriteResponseAmino;
    fromAminoMsg(object: MsgUnderwriteResponseAminoMsg): MsgUnderwriteResponse;
    fromProtoMsg(message: MsgUnderwriteResponseProtoMsg): MsgUnderwriteResponse;
    toProto(message: MsgUnderwriteResponse): Uint8Array;
    toProtoMsg(message: MsgUnderwriteResponse): MsgUnderwriteResponseProtoMsg;
};
export declare const MsgRequestRedemption: {
    typeUrl: string;
    encode(message: MsgRequestRedemption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemption;
    fromPartial(object: Partial<MsgRequestRedemption>): MsgRequestRedemption;
    fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption;
    toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino;
    fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption;
    fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption;
    toProto(message: MsgRequestRedemption): Uint8Array;
    toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg;
};
export declare const MsgRequestRedemptionResponse: {
    typeUrl: string;
    encode(_: MsgRequestRedemptionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemptionResponse;
    fromPartial(_: Partial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse;
    fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse;
    toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino;
    fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse;
    fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse;
    toProto(message: MsgRequestRedemptionResponse): Uint8Array;
    toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg;
};
