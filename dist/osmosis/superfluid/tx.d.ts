import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgSuperfluidDelegate {
    sender: string;
    lockId: bigint;
    valAddr: string;
}
export interface MsgSuperfluidDelegateProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate";
    value: Uint8Array;
}
export interface MsgSuperfluidDelegateAmino {
    sender?: string;
    lock_id?: string;
    val_addr?: string;
}
export interface MsgSuperfluidDelegateAminoMsg {
    type: "osmosis/superfluid-delegate";
    value: MsgSuperfluidDelegateAmino;
}
export interface MsgSuperfluidDelegateSDKType {
    sender: string;
    lock_id: bigint;
    val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidDelegateResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse";
    value: Uint8Array;
}
export interface MsgSuperfluidDelegateResponseAmino {
}
export interface MsgSuperfluidDelegateResponseAminoMsg {
    type: "osmosis/superfluid-delegate-response";
    value: MsgSuperfluidDelegateResponseAmino;
}
export interface MsgSuperfluidDelegateResponseSDKType {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: bigint;
}
export interface MsgSuperfluidUndelegateProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate";
    value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAmino {
    sender?: string;
    lock_id?: string;
}
export interface MsgSuperfluidUndelegateAminoMsg {
    type: "osmosis/superfluid-undelegate";
    value: MsgSuperfluidUndelegateAmino;
}
export interface MsgSuperfluidUndelegateSDKType {
    sender: string;
    lock_id: bigint;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUndelegateResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse";
    value: Uint8Array;
}
export interface MsgSuperfluidUndelegateResponseAmino {
}
export interface MsgSuperfluidUndelegateResponseAminoMsg {
    type: "osmosis/superfluid-undelegate-response";
    value: MsgSuperfluidUndelegateResponseAmino;
}
export interface MsgSuperfluidUndelegateResponseSDKType {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: bigint;
}
export interface MsgSuperfluidUnbondLockProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock";
    value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockAmino {
    sender?: string;
    lock_id?: string;
}
export interface MsgSuperfluidUnbondLockAminoMsg {
    type: "osmosis/superfluid-unbond-lock";
    value: MsgSuperfluidUnbondLockAmino;
}
export interface MsgSuperfluidUnbondLockSDKType {
    sender: string;
    lock_id: bigint;
}
export interface MsgSuperfluidUnbondLockResponse {
}
export interface MsgSuperfluidUnbondLockResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse";
    value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockResponseAmino {
}
export interface MsgSuperfluidUnbondLockResponseAminoMsg {
    type: "osmosis/superfluid-unbond-lock-response";
    value: MsgSuperfluidUnbondLockResponseAmino;
}
export interface MsgSuperfluidUnbondLockResponseSDKType {
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate";
    value: Uint8Array;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateAmino {
    sender?: string;
    coins?: CoinAmino[];
    val_addr?: string;
}
export interface MsgLockAndSuperfluidDelegateAminoMsg {
    type: "osmosis/lock-and-superfluid-delegate";
    value: MsgLockAndSuperfluidDelegateAmino;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
    sender: string;
    coins: CoinSDKType[];
    val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
    iD: bigint;
}
export interface MsgLockAndSuperfluidDelegateResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse";
    value: Uint8Array;
}
export interface MsgLockAndSuperfluidDelegateResponseAmino {
    ID?: string;
}
export interface MsgLockAndSuperfluidDelegateResponseAminoMsg {
    type: "osmosis/lock-and-superfluid-delegate-response";
    value: MsgLockAndSuperfluidDelegateResponseAmino;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
    ID: bigint;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
    sender: string;
    poolId: bigint;
}
export interface MsgUnPoolWhitelistedPoolProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool";
    value: Uint8Array;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolAmino {
    sender?: string;
    pool_id?: string;
}
export interface MsgUnPoolWhitelistedPoolAminoMsg {
    type: "osmosis/unpool-whitelisted-pool";
    value: MsgUnPoolWhitelistedPoolAmino;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
    sender: string;
    pool_id: bigint;
}
export interface MsgUnPoolWhitelistedPoolResponse {
    exitedLockIds: bigint[];
}
export interface MsgUnPoolWhitelistedPoolResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse";
    value: Uint8Array;
}
export interface MsgUnPoolWhitelistedPoolResponseAmino {
    exited_lock_ids?: string[];
}
export interface MsgUnPoolWhitelistedPoolResponseAminoMsg {
    type: "osmosis/un-pool-whitelisted-pool-response";
    value: MsgUnPoolWhitelistedPoolResponseAmino;
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
    exited_lock_ids: bigint[];
}
export declare const MsgSuperfluidDelegate: {
    typeUrl: string;
    encode(message: MsgSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegate;
    fromPartial(object: Partial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate;
    fromAmino(object: MsgSuperfluidDelegateAmino): MsgSuperfluidDelegate;
    toAmino(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAmino;
    fromAminoMsg(object: MsgSuperfluidDelegateAminoMsg): MsgSuperfluidDelegate;
    toAminoMsg(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAminoMsg;
    fromProtoMsg(message: MsgSuperfluidDelegateProtoMsg): MsgSuperfluidDelegate;
    toProto(message: MsgSuperfluidDelegate): Uint8Array;
    toProtoMsg(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateProtoMsg;
};
export declare const MsgSuperfluidDelegateResponse: {
    typeUrl: string;
    encode(_: MsgSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse;
    fromAmino(_: MsgSuperfluidDelegateResponseAmino): MsgSuperfluidDelegateResponse;
    toAmino(_: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseAmino;
    fromAminoMsg(object: MsgSuperfluidDelegateResponseAminoMsg): MsgSuperfluidDelegateResponse;
    toAminoMsg(message: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgSuperfluidDelegateResponseProtoMsg): MsgSuperfluidDelegateResponse;
    toProto(message: MsgSuperfluidDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseProtoMsg;
};
export declare const MsgSuperfluidUndelegate: {
    typeUrl: string;
    encode(message: MsgSuperfluidUndelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegate;
    fromPartial(object: Partial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate;
    fromAmino(object: MsgSuperfluidUndelegateAmino): MsgSuperfluidUndelegate;
    toAmino(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAmino;
    fromAminoMsg(object: MsgSuperfluidUndelegateAminoMsg): MsgSuperfluidUndelegate;
    toAminoMsg(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUndelegateProtoMsg): MsgSuperfluidUndelegate;
    toProto(message: MsgSuperfluidUndelegate): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateProtoMsg;
};
export declare const MsgSuperfluidUndelegateResponse: {
    typeUrl: string;
    encode(_: MsgSuperfluidUndelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse;
    fromAmino(_: MsgSuperfluidUndelegateResponseAmino): MsgSuperfluidUndelegateResponse;
    toAmino(_: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseAmino;
    fromAminoMsg(object: MsgSuperfluidUndelegateResponseAminoMsg): MsgSuperfluidUndelegateResponse;
    toAminoMsg(message: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUndelegateResponseProtoMsg): MsgSuperfluidUndelegateResponse;
    toProto(message: MsgSuperfluidUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseProtoMsg;
};
export declare const MsgSuperfluidUnbondLock: {
    typeUrl: string;
    encode(message: MsgSuperfluidUnbondLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLock;
    fromPartial(object: Partial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock;
    fromAmino(object: MsgSuperfluidUnbondLockAmino): MsgSuperfluidUnbondLock;
    toAmino(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAmino;
    fromAminoMsg(object: MsgSuperfluidUnbondLockAminoMsg): MsgSuperfluidUnbondLock;
    toAminoMsg(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUnbondLockProtoMsg): MsgSuperfluidUnbondLock;
    toProto(message: MsgSuperfluidUnbondLock): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockProtoMsg;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    typeUrl: string;
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse;
    fromPartial(_: Partial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse;
    fromAmino(_: MsgSuperfluidUnbondLockResponseAmino): MsgSuperfluidUnbondLockResponse;
    toAmino(_: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseAmino;
    fromAminoMsg(object: MsgSuperfluidUnbondLockResponseAminoMsg): MsgSuperfluidUnbondLockResponse;
    toAminoMsg(message: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUnbondLockResponseProtoMsg): MsgSuperfluidUnbondLockResponse;
    toProto(message: MsgSuperfluidUnbondLockResponse): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseProtoMsg;
};
export declare const MsgLockAndSuperfluidDelegate: {
    typeUrl: string;
    encode(message: MsgLockAndSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate;
    fromAmino(object: MsgLockAndSuperfluidDelegateAmino): MsgLockAndSuperfluidDelegate;
    toAmino(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAmino;
    fromAminoMsg(object: MsgLockAndSuperfluidDelegateAminoMsg): MsgLockAndSuperfluidDelegate;
    toAminoMsg(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAminoMsg;
    fromProtoMsg(message: MsgLockAndSuperfluidDelegateProtoMsg): MsgLockAndSuperfluidDelegate;
    toProto(message: MsgLockAndSuperfluidDelegate): Uint8Array;
    toProtoMsg(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateProtoMsg;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    typeUrl: string;
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse;
    fromAmino(object: MsgLockAndSuperfluidDelegateResponseAmino): MsgLockAndSuperfluidDelegateResponse;
    toAmino(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAmino;
    fromAminoMsg(object: MsgLockAndSuperfluidDelegateResponseAminoMsg): MsgLockAndSuperfluidDelegateResponse;
    toAminoMsg(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgLockAndSuperfluidDelegateResponseProtoMsg): MsgLockAndSuperfluidDelegateResponse;
    toProto(message: MsgLockAndSuperfluidDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseProtoMsg;
};
export declare const MsgUnPoolWhitelistedPool: {
    typeUrl: string;
    encode(message: MsgUnPoolWhitelistedPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool;
    fromAmino(object: MsgUnPoolWhitelistedPoolAmino): MsgUnPoolWhitelistedPool;
    toAmino(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAmino;
    fromAminoMsg(object: MsgUnPoolWhitelistedPoolAminoMsg): MsgUnPoolWhitelistedPool;
    toAminoMsg(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAminoMsg;
    fromProtoMsg(message: MsgUnPoolWhitelistedPoolProtoMsg): MsgUnPoolWhitelistedPool;
    toProto(message: MsgUnPoolWhitelistedPool): Uint8Array;
    toProtoMsg(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolProtoMsg;
};
export declare const MsgUnPoolWhitelistedPoolResponse: {
    typeUrl: string;
    encode(message: MsgUnPoolWhitelistedPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse;
    fromAmino(object: MsgUnPoolWhitelistedPoolResponseAmino): MsgUnPoolWhitelistedPoolResponse;
    toAmino(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAmino;
    fromAminoMsg(object: MsgUnPoolWhitelistedPoolResponseAminoMsg): MsgUnPoolWhitelistedPoolResponse;
    toAminoMsg(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAminoMsg;
    fromProtoMsg(message: MsgUnPoolWhitelistedPoolResponseProtoMsg): MsgUnPoolWhitelistedPoolResponse;
    toProto(message: MsgUnPoolWhitelistedPoolResponse): Uint8Array;
    toProtoMsg(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseProtoMsg;
};
