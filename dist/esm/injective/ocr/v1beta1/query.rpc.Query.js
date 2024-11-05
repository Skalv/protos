import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.feedConfig = this.feedConfig.bind(this);
        this.feedConfigInfo = this.feedConfigInfo.bind(this);
        this.latestRound = this.latestRound.bind(this);
        this.latestTransmissionDetails = this.latestTransmissionDetails.bind(this);
        this.owedAmount = this.owedAmount.bind(this);
        this.ocrModuleState = this.ocrModuleState.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    feedConfig(request) {
        const data = QueryFeedConfigRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfig", data);
        return promise.then(data => QueryFeedConfigResponse.decode(new BinaryReader(data)));
    }
    feedConfigInfo(request) {
        const data = QueryFeedConfigInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfigInfo", data);
        return promise.then(data => QueryFeedConfigInfoResponse.decode(new BinaryReader(data)));
    }
    latestRound(request) {
        const data = QueryLatestRoundRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestRound", data);
        return promise.then(data => QueryLatestRoundResponse.decode(new BinaryReader(data)));
    }
    latestTransmissionDetails(request) {
        const data = QueryLatestTransmissionDetailsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestTransmissionDetails", data);
        return promise.then(data => QueryLatestTransmissionDetailsResponse.decode(new BinaryReader(data)));
    }
    owedAmount(request) {
        const data = QueryOwedAmountRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OwedAmount", data);
        return promise.then(data => QueryOwedAmountResponse.decode(new BinaryReader(data)));
    }
    ocrModuleState(request = {}) {
        const data = QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OcrModuleState", data);
        return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        feedConfig(request) {
            return queryService.feedConfig(request);
        },
        feedConfigInfo(request) {
            return queryService.feedConfigInfo(request);
        },
        latestRound(request) {
            return queryService.latestRound(request);
        },
        latestTransmissionDetails(request) {
            return queryService.latestTransmissionDetails(request);
        },
        owedAmount(request) {
            return queryService.owedAmount(request);
        },
        ocrModuleState(request) {
            return queryService.ocrModuleState(request);
        }
    };
};
