"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.akash = void 0;
//@ts-nocheck
const _0 = __importStar(require("./audit/v1beta1/audit"));
const _1 = __importStar(require("./audit/v1beta2/audit"));
const _2 = __importStar(require("./audit/v1beta2/genesis"));
const _3 = __importStar(require("./audit/v1beta2/query"));
const _4 = __importStar(require("./base/v1beta1/attribute"));
const _5 = __importStar(require("./base/v1beta1/endpoint"));
const _6 = __importStar(require("./base/v1beta1/resource"));
const _7 = __importStar(require("./base/v1beta1/resourcevalue"));
const _8 = __importStar(require("./base/v1beta2/attribute"));
const _9 = __importStar(require("./base/v1beta2/endpoint"));
const _10 = __importStar(require("./base/v1beta2/resource"));
const _11 = __importStar(require("./base/v1beta2/resourceunits"));
const _12 = __importStar(require("./base/v1beta2/resourcevalue"));
const _13 = __importStar(require("./cert/v1beta2/cert"));
const _14 = __importStar(require("./cert/v1beta2/genesis"));
const _15 = __importStar(require("./cert/v1beta2/query"));
const _16 = __importStar(require("./deployment/v1beta1/authz"));
const _17 = __importStar(require("./deployment/v1beta1/deployment"));
const _18 = __importStar(require("./deployment/v1beta1/genesis"));
const _19 = __importStar(require("./deployment/v1beta1/group"));
const _20 = __importStar(require("./deployment/v1beta1/params"));
const _21 = __importStar(require("./deployment/v1beta1/query"));
const _22 = __importStar(require("./deployment/v1beta2/authz"));
const _23 = __importStar(require("./deployment/v1beta2/deployment"));
const _24 = __importStar(require("./deployment/v1beta2/deploymentmsg"));
const _25 = __importStar(require("./deployment/v1beta2/genesis"));
const _26 = __importStar(require("./deployment/v1beta2/group"));
const _27 = __importStar(require("./deployment/v1beta2/groupid"));
const _28 = __importStar(require("./deployment/v1beta2/groupmsg"));
const _29 = __importStar(require("./deployment/v1beta2/groupspec"));
const _30 = __importStar(require("./deployment/v1beta2/params"));
const _31 = __importStar(require("./deployment/v1beta2/query"));
const _32 = __importStar(require("./deployment/v1beta2/resource"));
const _33 = __importStar(require("./deployment/v1beta2/service"));
const _34 = __importStar(require("./escrow/v1beta1/genesis"));
const _35 = __importStar(require("./escrow/v1beta1/query"));
const _36 = __importStar(require("./escrow/v1beta1/types"));
const _37 = __importStar(require("./escrow/v1beta2/genesis"));
const _38 = __importStar(require("./escrow/v1beta2/query"));
const _39 = __importStar(require("./escrow/v1beta2/types"));
const _40 = __importStar(require("./inflation/v1beta2/genesis"));
const _41 = __importStar(require("./inflation/v1beta2/params"));
const _42 = __importStar(require("./market/v1beta2/bid"));
const _43 = __importStar(require("./market/v1beta2/genesis"));
const _44 = __importStar(require("./market/v1beta2/lease"));
const _45 = __importStar(require("./market/v1beta2/order"));
const _46 = __importStar(require("./market/v1beta2/params"));
const _47 = __importStar(require("./market/v1beta2/query"));
const _48 = __importStar(require("./market/v1beta2/service"));
const _49 = __importStar(require("./provider/v1beta1/provider"));
const _50 = __importStar(require("./provider/v1beta2/genesis"));
const _51 = __importStar(require("./provider/v1beta2/provider"));
const _52 = __importStar(require("./provider/v1beta2/query"));
const _373 = __importStar(require("./audit/v1beta1/audit.amino"));
const _374 = __importStar(require("./audit/v1beta2/audit.amino"));
const _375 = __importStar(require("./cert/v1beta2/cert.amino"));
const _376 = __importStar(require("./deployment/v1beta1/deployment.amino"));
const _377 = __importStar(require("./deployment/v1beta2/service.amino"));
const _378 = __importStar(require("./market/v1beta2/service.amino"));
const _379 = __importStar(require("./provider/v1beta1/provider.amino"));
const _380 = __importStar(require("./provider/v1beta2/provider.amino"));
const _381 = __importStar(require("./audit/v1beta1/audit.registry"));
const _382 = __importStar(require("./audit/v1beta2/audit.registry"));
const _383 = __importStar(require("./cert/v1beta2/cert.registry"));
const _384 = __importStar(require("./deployment/v1beta1/deployment.registry"));
const _385 = __importStar(require("./deployment/v1beta2/service.registry"));
const _386 = __importStar(require("./market/v1beta2/service.registry"));
const _387 = __importStar(require("./provider/v1beta1/provider.registry"));
const _388 = __importStar(require("./provider/v1beta2/provider.registry"));
const _389 = __importStar(require("./audit/v1beta2/query.rpc.Query"));
const _390 = __importStar(require("./cert/v1beta2/query.rpc.Query"));
const _391 = __importStar(require("./deployment/v1beta1/query.rpc.Query"));
const _392 = __importStar(require("./deployment/v1beta2/query.rpc.Query"));
const _393 = __importStar(require("./escrow/v1beta1/query.rpc.Query"));
const _394 = __importStar(require("./escrow/v1beta2/query.rpc.Query"));
const _395 = __importStar(require("./market/v1beta2/query.rpc.Query"));
const _396 = __importStar(require("./provider/v1beta2/query.rpc.Query"));
const _397 = __importStar(require("./audit/v1beta1/audit.rpc.msg"));
const _398 = __importStar(require("./audit/v1beta2/audit.rpc.msg"));
const _399 = __importStar(require("./cert/v1beta2/cert.rpc.msg"));
const _400 = __importStar(require("./deployment/v1beta1/deployment.rpc.msg"));
const _401 = __importStar(require("./deployment/v1beta2/service.rpc.msg"));
const _402 = __importStar(require("./market/v1beta2/service.rpc.msg"));
const _403 = __importStar(require("./provider/v1beta1/provider.rpc.msg"));
const _404 = __importStar(require("./provider/v1beta2/provider.rpc.msg"));
const _599 = __importStar(require("./rpc.query"));
const _600 = __importStar(require("./rpc.tx"));
var akash;
(function (akash) {
    let audit;
    (function (audit) {
        audit.v1beta1 = {
            ..._0,
            ..._373,
            ..._381,
            ..._397
        };
        audit.v1beta2 = {
            ..._1,
            ..._2,
            ..._3,
            ..._374,
            ..._382,
            ..._389,
            ..._398
        };
    })(audit = akash.audit || (akash.audit = {}));
    let base;
    (function (base) {
        base.v1beta1 = {
            ..._4,
            ..._5,
            ..._6,
            ..._7
        };
        base.v1beta2 = {
            ..._8,
            ..._9,
            ..._10,
            ..._11,
            ..._12
        };
    })(base = akash.base || (akash.base = {}));
    let cert;
    (function (cert) {
        cert.v1beta2 = {
            ..._13,
            ..._14,
            ..._15,
            ..._375,
            ..._383,
            ..._390,
            ..._399
        };
    })(cert = akash.cert || (akash.cert = {}));
    let deployment;
    (function (deployment) {
        deployment.v1beta1 = {
            ..._16,
            ..._17,
            ..._18,
            ..._19,
            ..._20,
            ..._21,
            ..._376,
            ..._384,
            ..._391,
            ..._400
        };
        deployment.v1beta2 = {
            ..._22,
            ..._23,
            ..._24,
            ..._25,
            ..._26,
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._31,
            ..._32,
            ..._33,
            ..._377,
            ..._385,
            ..._392,
            ..._401
        };
    })(deployment = akash.deployment || (akash.deployment = {}));
    let escrow;
    (function (escrow) {
        escrow.v1beta1 = {
            ..._34,
            ..._35,
            ..._36,
            ..._393
        };
        escrow.v1beta2 = {
            ..._37,
            ..._38,
            ..._39,
            ..._394
        };
    })(escrow = akash.escrow || (akash.escrow = {}));
    let inflation;
    (function (inflation) {
        inflation.v1beta2 = {
            ..._40,
            ..._41
        };
    })(inflation = akash.inflation || (akash.inflation = {}));
    let market;
    (function (market) {
        market.v1beta2 = {
            ..._42,
            ..._43,
            ..._44,
            ..._45,
            ..._46,
            ..._47,
            ..._48,
            ..._378,
            ..._386,
            ..._395,
            ..._402
        };
    })(market = akash.market || (akash.market = {}));
    let provider;
    (function (provider) {
        provider.v1beta1 = {
            ..._49,
            ..._379,
            ..._387,
            ..._403
        };
        provider.v1beta2 = {
            ..._50,
            ..._51,
            ..._52,
            ..._380,
            ..._388,
            ..._396,
            ..._404
        };
    })(provider = akash.provider || (akash.provider = {}));
    akash.ClientFactory = {
        ..._599,
        ..._600
    };
})(akash || (exports.akash = akash = {}));
