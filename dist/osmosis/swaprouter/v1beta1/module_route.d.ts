import { BinaryReader, BinaryWriter } from "../../../binary";
/** PoolType is an enumeration of all supported pool types. */
export declare enum PoolType {
    /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
    Balancer = 0,
    /**
     * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
     * in x/gamm.
     */
    Stableswap = 1,
    /**
     * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
     * defined in x/concentrated-liquidity.
     */
    Concentrated = 2,
    UNRECOGNIZED = -1
}
export declare const PoolTypeSDKType: typeof PoolType;
export declare const PoolTypeAmino: typeof PoolType;
export declare function poolTypeFromJSON(object: any): PoolType;
export declare function poolTypeToJSON(object: PoolType): string;
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the swap router to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
    /** pool_type specifies the type of the pool */
    poolType: PoolType;
}
export interface ModuleRouteProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.ModuleRoute";
    value: Uint8Array;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the swap router to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteAmino {
    /** pool_type specifies the type of the pool */
    pool_type?: PoolType;
}
export interface ModuleRouteAminoMsg {
    type: "osmosis/swaprouter/module-route";
    value: ModuleRouteAmino;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the swap router to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteSDKType {
    pool_type: PoolType;
}
export declare const ModuleRoute: {
    typeUrl: string;
    encode(message: ModuleRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleRoute;
    fromPartial(object: Partial<ModuleRoute>): ModuleRoute;
    fromAmino(object: ModuleRouteAmino): ModuleRoute;
    toAmino(message: ModuleRoute): ModuleRouteAmino;
    fromAminoMsg(object: ModuleRouteAminoMsg): ModuleRoute;
    toAminoMsg(message: ModuleRoute): ModuleRouteAminoMsg;
    fromProtoMsg(message: ModuleRouteProtoMsg): ModuleRoute;
    toProto(message: ModuleRoute): Uint8Array;
    toProtoMsg(message: ModuleRoute): ModuleRouteProtoMsg;
};
