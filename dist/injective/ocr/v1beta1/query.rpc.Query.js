"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    feedConfig(request) {
        const data = query_1.QueryFeedConfigRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfig", data);
        return promise.then(data => query_1.QueryFeedConfigResponse.decode(new binary_1.BinaryReader(data)));
    }
    feedConfigInfo(request) {
        const data = query_1.QueryFeedConfigInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfigInfo", data);
        return promise.then(data => query_1.QueryFeedConfigInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    latestRound(request) {
        const data = query_1.QueryLatestRoundRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestRound", data);
        return promise.then(data => query_1.QueryLatestRoundResponse.decode(new binary_1.BinaryReader(data)));
    }
    latestTransmissionDetails(request) {
        const data = query_1.QueryLatestTransmissionDetailsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestTransmissionDetails", data);
        return promise.then(data => query_1.QueryLatestTransmissionDetailsResponse.decode(new binary_1.BinaryReader(data)));
    }
    owedAmount(request) {
        const data = query_1.QueryOwedAmountRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OwedAmount", data);
        return promise.then(data => query_1.QueryOwedAmountResponse.decode(new binary_1.BinaryReader(data)));
    }
    ocrModuleState(request = {}) {
        const data = query_1.QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OcrModuleState", data);
        return promise.then(data => query_1.QueryModuleStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
