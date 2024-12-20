import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRatePrevoteAmino, AggregateExchangeRatePrevoteSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRates {
    /** denom defines the denomination to query for. */
    denom: string;
}
export interface QueryExchangeRatesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryExchangeRates";
    value: Uint8Array;
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRatesAmino {
    /** denom defines the denomination to query for. */
    denom?: string;
}
export interface QueryExchangeRatesAminoMsg {
    type: "/umee.oracle.v1.QueryExchangeRates";
    value: QueryExchangeRatesAmino;
}
/**
 * QueryExchangeRates is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRatesSDKType {
    denom: string;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
    /**
     * exchange_rates defines a list of the exchange rate for all whitelisted
     * denoms.
     */
    exchangeRates: DecCoin[];
}
export interface QueryExchangeRatesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse";
    value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseAmino {
    /**
     * exchange_rates defines a list of the exchange rate for all whitelisted
     * denoms.
     */
    exchange_rates?: DecCoinAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryExchangeRatesResponse";
    value: QueryExchangeRatesResponseAmino;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
    exchange_rates: DecCoinSDKType[];
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRates {
}
export interface QueryActiveExchangeRatesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates";
    value: Uint8Array;
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesAmino {
}
export interface QueryActiveExchangeRatesAminoMsg {
    type: "/umee.oracle.v1.QueryActiveExchangeRates";
    value: QueryActiveExchangeRatesAmino;
}
/**
 * QueryActiveExchangeRates is the request type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesSDKType {
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponse {
    /**
     * activeRates defines a list of the denomination which oracle prices aggreed
     * upon.
     */
    activeRates: string[];
}
export interface QueryActiveExchangeRatesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse";
    value: Uint8Array;
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseAmino {
    /**
     * activeRates defines a list of the denomination which oracle prices aggreed
     * upon.
     */
    active_rates?: string[];
}
export interface QueryActiveExchangeRatesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryActiveExchangeRatesResponse";
    value: QueryActiveExchangeRatesResponseAmino;
}
/**
 * QueryActiveExchangeRatesResponse is response type for the
 * Query/ActiveExchangeRates RPC method.
 */
export interface QueryActiveExchangeRatesResponseSDKType {
    active_rates: string[];
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegation {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryFeederDelegationProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegation";
    value: Uint8Array;
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryFeederDelegationAminoMsg {
    type: "/umee.oracle.v1.QueryFeederDelegation";
    value: QueryFeederDelegationAmino;
}
/**
 * QueryFeederDelegation is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationSDKType {
    validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
    /** feeder_addr defines the feeder delegation of a validator */
    feederAddr: string;
}
export interface QueryFeederDelegationResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse";
    value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseAmino {
    /** feeder_addr defines the feeder delegation of a validator */
    feeder_addr?: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
    type: "/umee.oracle.v1.QueryFeederDelegationResponse";
    value: QueryFeederDelegationResponseAmino;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
    feeder_addr: string;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounter {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryMissCounterProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMissCounter";
    value: Uint8Array;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryMissCounterAminoMsg {
    type: "/umee.oracle.v1.QueryMissCounter";
    value: QueryMissCounterAmino;
}
/**
 * QueryMissCounter is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterSDKType {
    validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
    /** miss_counter defines the oracle miss counter of a validator */
    missCounter: bigint;
}
export interface QueryMissCounterResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryMissCounterResponse";
    value: Uint8Array;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseAmino {
    /** miss_counter defines the oracle miss counter of a validator */
    miss_counter?: string;
}
export interface QueryMissCounterResponseAminoMsg {
    type: "/umee.oracle.v1.QueryMissCounterResponse";
    value: QueryMissCounterResponseAmino;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponseSDKType {
    miss_counter: bigint;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindow {
}
export interface QuerySlashWindowProtoMsg {
    typeUrl: "/umee.oracle.v1.QuerySlashWindow";
    value: Uint8Array;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowAmino {
}
export interface QuerySlashWindowAminoMsg {
    type: "/umee.oracle.v1.QuerySlashWindow";
    value: QuerySlashWindowAmino;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowSDKType {
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponse {
    /**
     * window_progress defines the number of voting periods
     * since the last slashing event would have taken place.
     */
    windowProgress: bigint;
}
export interface QuerySlashWindowResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse";
    value: Uint8Array;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseAmino {
    /**
     * window_progress defines the number of voting periods
     * since the last slashing event would have taken place.
     */
    window_progress?: string;
}
export interface QuerySlashWindowResponseAminoMsg {
    type: "/umee.oracle.v1.QuerySlashWindowResponse";
    value: QuerySlashWindowResponseAmino;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
    window_progress: bigint;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevote {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryAggregatePrevoteProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevote";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryAggregatePrevoteAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevote";
    value: QueryAggregatePrevoteAmino;
}
/**
 * QueryAggregatePrevote is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteSDKType {
    validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
    /**
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator
     * in the current vote period
     */
    aggregatePrevote: AggregateExchangeRatePrevote;
}
export interface QueryAggregatePrevoteResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseAmino {
    /**
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator
     * in the current vote period
     */
    aggregate_prevote?: AggregateExchangeRatePrevoteAmino;
}
export interface QueryAggregatePrevoteResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevoteResponse";
    value: QueryAggregatePrevoteResponseAmino;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponseSDKType {
    aggregate_prevote: AggregateExchangeRatePrevoteSDKType;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotes {
}
export interface QueryAggregatePrevotesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesAmino {
}
export interface QueryAggregatePrevotesAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevotes";
    value: QueryAggregatePrevotesAmino;
}
/**
 * QueryAggregatePrevotes is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesSDKType {
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
    /**
     * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
     * current vote period
     */
    aggregatePrevotes: AggregateExchangeRatePrevote[];
}
export interface QueryAggregatePrevotesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse";
    value: Uint8Array;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseAmino {
    /**
     * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
     * current vote period
     */
    aggregate_prevotes?: AggregateExchangeRatePrevoteAmino[];
}
export interface QueryAggregatePrevotesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregatePrevotesResponse";
    value: QueryAggregatePrevotesResponseAmino;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponseSDKType {
    aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVote {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryAggregateVoteProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVote";
    value: Uint8Array;
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryAggregateVoteAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVote";
    value: QueryAggregateVoteAmino;
}
/**
 * QueryAggregateVote is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteSDKType {
    validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
    /**
     * aggregate_vote defines oracle aggregate vote submitted by a validator in
     * the current vote period
     */
    aggregateVote: AggregateExchangeRateVote;
}
export interface QueryAggregateVoteResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse";
    value: Uint8Array;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseAmino {
    /**
     * aggregate_vote defines oracle aggregate vote submitted by a validator in
     * the current vote period
     */
    aggregate_vote?: AggregateExchangeRateVoteAmino;
}
export interface QueryAggregateVoteResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVoteResponse";
    value: QueryAggregateVoteResponseAmino;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
    aggregate_vote: AggregateExchangeRateVoteSDKType;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotes {
}
export interface QueryAggregateVotesProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotes";
    value: Uint8Array;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesAmino {
}
export interface QueryAggregateVotesAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVotes";
    value: QueryAggregateVotesAmino;
}
/**
 * QueryAggregateVotes is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesSDKType {
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
    /**
     * aggregate_votes defines all oracle aggregate votes submitted in the current
     * vote period
     */
    aggregateVotes: AggregateExchangeRateVote[];
}
export interface QueryAggregateVotesResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse";
    value: Uint8Array;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseAmino {
    /**
     * aggregate_votes defines all oracle aggregate votes submitted in the current
     * vote period
     */
    aggregate_votes?: AggregateExchangeRateVoteAmino[];
}
export interface QueryAggregateVotesResponseAminoMsg {
    type: "/umee.oracle.v1.QueryAggregateVotesResponse";
    value: QueryAggregateVotesResponseAmino;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseSDKType {
    aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParams {
}
export interface QueryParamsProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryParams";
    value: Uint8Array;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsAmino {
}
export interface QueryParamsAminoMsg {
    type: "/umee.oracle.v1.QueryParams";
    value: QueryParamsAmino;
}
/** QueryParams is the request type for the Query/Params RPC method. */
export interface QueryParamsSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/umee.oracle.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/umee.oracle.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryExchangeRates: {
    typeUrl: string;
    encode(message: QueryExchangeRates, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRates;
    fromPartial(object: Partial<QueryExchangeRates>): QueryExchangeRates;
    fromAmino(object: QueryExchangeRatesAmino): QueryExchangeRates;
    toAmino(message: QueryExchangeRates): QueryExchangeRatesAmino;
    fromAminoMsg(object: QueryExchangeRatesAminoMsg): QueryExchangeRates;
    fromProtoMsg(message: QueryExchangeRatesProtoMsg): QueryExchangeRates;
    toProto(message: QueryExchangeRates): Uint8Array;
    toProtoMsg(message: QueryExchangeRates): QueryExchangeRatesProtoMsg;
};
export declare const QueryExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse;
    fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
    fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse;
    toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse;
    fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse;
    toProto(message: QueryExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg;
};
export declare const QueryActiveExchangeRates: {
    typeUrl: string;
    encode(_: QueryActiveExchangeRates, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveExchangeRates;
    fromPartial(_: Partial<QueryActiveExchangeRates>): QueryActiveExchangeRates;
    fromAmino(_: QueryActiveExchangeRatesAmino): QueryActiveExchangeRates;
    toAmino(_: QueryActiveExchangeRates): QueryActiveExchangeRatesAmino;
    fromAminoMsg(object: QueryActiveExchangeRatesAminoMsg): QueryActiveExchangeRates;
    fromProtoMsg(message: QueryActiveExchangeRatesProtoMsg): QueryActiveExchangeRates;
    toProto(message: QueryActiveExchangeRates): Uint8Array;
    toProtoMsg(message: QueryActiveExchangeRates): QueryActiveExchangeRatesProtoMsg;
};
export declare const QueryActiveExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryActiveExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveExchangeRatesResponse;
    fromPartial(object: Partial<QueryActiveExchangeRatesResponse>): QueryActiveExchangeRatesResponse;
    fromAmino(object: QueryActiveExchangeRatesResponseAmino): QueryActiveExchangeRatesResponse;
    toAmino(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryActiveExchangeRatesResponseAminoMsg): QueryActiveExchangeRatesResponse;
    fromProtoMsg(message: QueryActiveExchangeRatesResponseProtoMsg): QueryActiveExchangeRatesResponse;
    toProto(message: QueryActiveExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryActiveExchangeRatesResponse): QueryActiveExchangeRatesResponseProtoMsg;
};
export declare const QueryFeederDelegation: {
    typeUrl: string;
    encode(message: QueryFeederDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegation;
    fromPartial(object: Partial<QueryFeederDelegation>): QueryFeederDelegation;
    fromAmino(object: QueryFeederDelegationAmino): QueryFeederDelegation;
    toAmino(message: QueryFeederDelegation): QueryFeederDelegationAmino;
    fromAminoMsg(object: QueryFeederDelegationAminoMsg): QueryFeederDelegation;
    fromProtoMsg(message: QueryFeederDelegationProtoMsg): QueryFeederDelegation;
    toProto(message: QueryFeederDelegation): Uint8Array;
    toProtoMsg(message: QueryFeederDelegation): QueryFeederDelegationProtoMsg;
};
export declare const QueryFeederDelegationResponse: {
    typeUrl: string;
    encode(message: QueryFeederDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse;
    fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
    fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse;
    toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino;
    fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse;
    fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse;
    toProto(message: QueryFeederDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg;
};
export declare const QueryMissCounter: {
    typeUrl: string;
    encode(message: QueryMissCounter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounter;
    fromPartial(object: Partial<QueryMissCounter>): QueryMissCounter;
    fromAmino(object: QueryMissCounterAmino): QueryMissCounter;
    toAmino(message: QueryMissCounter): QueryMissCounterAmino;
    fromAminoMsg(object: QueryMissCounterAminoMsg): QueryMissCounter;
    fromProtoMsg(message: QueryMissCounterProtoMsg): QueryMissCounter;
    toProto(message: QueryMissCounter): Uint8Array;
    toProtoMsg(message: QueryMissCounter): QueryMissCounterProtoMsg;
};
export declare const QueryMissCounterResponse: {
    typeUrl: string;
    encode(message: QueryMissCounterResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterResponse;
    fromPartial(object: Partial<QueryMissCounterResponse>): QueryMissCounterResponse;
    fromAmino(object: QueryMissCounterResponseAmino): QueryMissCounterResponse;
    toAmino(message: QueryMissCounterResponse): QueryMissCounterResponseAmino;
    fromAminoMsg(object: QueryMissCounterResponseAminoMsg): QueryMissCounterResponse;
    fromProtoMsg(message: QueryMissCounterResponseProtoMsg): QueryMissCounterResponse;
    toProto(message: QueryMissCounterResponse): Uint8Array;
    toProtoMsg(message: QueryMissCounterResponse): QueryMissCounterResponseProtoMsg;
};
export declare const QuerySlashWindow: {
    typeUrl: string;
    encode(_: QuerySlashWindow, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindow;
    fromPartial(_: Partial<QuerySlashWindow>): QuerySlashWindow;
    fromAmino(_: QuerySlashWindowAmino): QuerySlashWindow;
    toAmino(_: QuerySlashWindow): QuerySlashWindowAmino;
    fromAminoMsg(object: QuerySlashWindowAminoMsg): QuerySlashWindow;
    fromProtoMsg(message: QuerySlashWindowProtoMsg): QuerySlashWindow;
    toProto(message: QuerySlashWindow): Uint8Array;
    toProtoMsg(message: QuerySlashWindow): QuerySlashWindowProtoMsg;
};
export declare const QuerySlashWindowResponse: {
    typeUrl: string;
    encode(message: QuerySlashWindowResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowResponse;
    fromPartial(object: Partial<QuerySlashWindowResponse>): QuerySlashWindowResponse;
    fromAmino(object: QuerySlashWindowResponseAmino): QuerySlashWindowResponse;
    toAmino(message: QuerySlashWindowResponse): QuerySlashWindowResponseAmino;
    fromAminoMsg(object: QuerySlashWindowResponseAminoMsg): QuerySlashWindowResponse;
    fromProtoMsg(message: QuerySlashWindowResponseProtoMsg): QuerySlashWindowResponse;
    toProto(message: QuerySlashWindowResponse): Uint8Array;
    toProtoMsg(message: QuerySlashWindowResponse): QuerySlashWindowResponseProtoMsg;
};
export declare const QueryAggregatePrevote: {
    typeUrl: string;
    encode(message: QueryAggregatePrevote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevote;
    fromPartial(object: Partial<QueryAggregatePrevote>): QueryAggregatePrevote;
    fromAmino(object: QueryAggregatePrevoteAmino): QueryAggregatePrevote;
    toAmino(message: QueryAggregatePrevote): QueryAggregatePrevoteAmino;
    fromAminoMsg(object: QueryAggregatePrevoteAminoMsg): QueryAggregatePrevote;
    fromProtoMsg(message: QueryAggregatePrevoteProtoMsg): QueryAggregatePrevote;
    toProto(message: QueryAggregatePrevote): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevote): QueryAggregatePrevoteProtoMsg;
};
export declare const QueryAggregatePrevoteResponse: {
    typeUrl: string;
    encode(message: QueryAggregatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteResponse;
    fromPartial(object: Partial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse;
    fromAmino(object: QueryAggregatePrevoteResponseAmino): QueryAggregatePrevoteResponse;
    toAmino(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseAmino;
    fromAminoMsg(object: QueryAggregatePrevoteResponseAminoMsg): QueryAggregatePrevoteResponse;
    fromProtoMsg(message: QueryAggregatePrevoteResponseProtoMsg): QueryAggregatePrevoteResponse;
    toProto(message: QueryAggregatePrevoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevoteResponse): QueryAggregatePrevoteResponseProtoMsg;
};
export declare const QueryAggregatePrevotes: {
    typeUrl: string;
    encode(_: QueryAggregatePrevotes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotes;
    fromPartial(_: Partial<QueryAggregatePrevotes>): QueryAggregatePrevotes;
    fromAmino(_: QueryAggregatePrevotesAmino): QueryAggregatePrevotes;
    toAmino(_: QueryAggregatePrevotes): QueryAggregatePrevotesAmino;
    fromAminoMsg(object: QueryAggregatePrevotesAminoMsg): QueryAggregatePrevotes;
    fromProtoMsg(message: QueryAggregatePrevotesProtoMsg): QueryAggregatePrevotes;
    toProto(message: QueryAggregatePrevotes): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotes): QueryAggregatePrevotesProtoMsg;
};
export declare const QueryAggregatePrevotesResponse: {
    typeUrl: string;
    encode(message: QueryAggregatePrevotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesResponse;
    fromPartial(object: Partial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse;
    fromAmino(object: QueryAggregatePrevotesResponseAmino): QueryAggregatePrevotesResponse;
    toAmino(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseAmino;
    fromAminoMsg(object: QueryAggregatePrevotesResponseAminoMsg): QueryAggregatePrevotesResponse;
    fromProtoMsg(message: QueryAggregatePrevotesResponseProtoMsg): QueryAggregatePrevotesResponse;
    toProto(message: QueryAggregatePrevotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregatePrevotesResponse): QueryAggregatePrevotesResponseProtoMsg;
};
export declare const QueryAggregateVote: {
    typeUrl: string;
    encode(message: QueryAggregateVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVote;
    fromPartial(object: Partial<QueryAggregateVote>): QueryAggregateVote;
    fromAmino(object: QueryAggregateVoteAmino): QueryAggregateVote;
    toAmino(message: QueryAggregateVote): QueryAggregateVoteAmino;
    fromAminoMsg(object: QueryAggregateVoteAminoMsg): QueryAggregateVote;
    fromProtoMsg(message: QueryAggregateVoteProtoMsg): QueryAggregateVote;
    toProto(message: QueryAggregateVote): Uint8Array;
    toProtoMsg(message: QueryAggregateVote): QueryAggregateVoteProtoMsg;
};
export declare const QueryAggregateVoteResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteResponse;
    fromPartial(object: Partial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse;
    fromAmino(object: QueryAggregateVoteResponseAmino): QueryAggregateVoteResponse;
    toAmino(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseAmino;
    fromAminoMsg(object: QueryAggregateVoteResponseAminoMsg): QueryAggregateVoteResponse;
    fromProtoMsg(message: QueryAggregateVoteResponseProtoMsg): QueryAggregateVoteResponse;
    toProto(message: QueryAggregateVoteResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVoteResponse): QueryAggregateVoteResponseProtoMsg;
};
export declare const QueryAggregateVotes: {
    typeUrl: string;
    encode(_: QueryAggregateVotes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotes;
    fromPartial(_: Partial<QueryAggregateVotes>): QueryAggregateVotes;
    fromAmino(_: QueryAggregateVotesAmino): QueryAggregateVotes;
    toAmino(_: QueryAggregateVotes): QueryAggregateVotesAmino;
    fromAminoMsg(object: QueryAggregateVotesAminoMsg): QueryAggregateVotes;
    fromProtoMsg(message: QueryAggregateVotesProtoMsg): QueryAggregateVotes;
    toProto(message: QueryAggregateVotes): Uint8Array;
    toProtoMsg(message: QueryAggregateVotes): QueryAggregateVotesProtoMsg;
};
export declare const QueryAggregateVotesResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesResponse;
    fromPartial(object: Partial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse;
    fromAmino(object: QueryAggregateVotesResponseAmino): QueryAggregateVotesResponse;
    toAmino(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseAmino;
    fromAminoMsg(object: QueryAggregateVotesResponseAminoMsg): QueryAggregateVotesResponse;
    fromProtoMsg(message: QueryAggregateVotesResponseProtoMsg): QueryAggregateVotesResponse;
    toProto(message: QueryAggregateVotesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVotesResponse): QueryAggregateVotesResponseProtoMsg;
};
export declare const QueryParams: {
    typeUrl: string;
    encode(_: QueryParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
    fromAmino(_: QueryParamsAmino): QueryParams;
    toAmino(_: QueryParams): QueryParamsAmino;
    fromAminoMsg(object: QueryParamsAminoMsg): QueryParams;
    fromProtoMsg(message: QueryParamsProtoMsg): QueryParams;
    toProto(message: QueryParams): Uint8Array;
    toProtoMsg(message: QueryParams): QueryParamsProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
