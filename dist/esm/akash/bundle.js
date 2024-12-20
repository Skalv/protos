//@ts-nocheck
import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./base/v1beta1/attribute";
import * as _5 from "./base/v1beta1/endpoint";
import * as _6 from "./base/v1beta1/resource";
import * as _7 from "./base/v1beta1/resourcevalue";
import * as _8 from "./base/v1beta2/attribute";
import * as _9 from "./base/v1beta2/endpoint";
import * as _10 from "./base/v1beta2/resource";
import * as _11 from "./base/v1beta2/resourceunits";
import * as _12 from "./base/v1beta2/resourcevalue";
import * as _13 from "./cert/v1beta2/cert";
import * as _14 from "./cert/v1beta2/genesis";
import * as _15 from "./cert/v1beta2/query";
import * as _16 from "./deployment/v1beta1/authz";
import * as _17 from "./deployment/v1beta1/deployment";
import * as _18 from "./deployment/v1beta1/genesis";
import * as _19 from "./deployment/v1beta1/group";
import * as _20 from "./deployment/v1beta1/params";
import * as _21 from "./deployment/v1beta1/query";
import * as _22 from "./deployment/v1beta2/authz";
import * as _23 from "./deployment/v1beta2/deployment";
import * as _24 from "./deployment/v1beta2/deploymentmsg";
import * as _25 from "./deployment/v1beta2/genesis";
import * as _26 from "./deployment/v1beta2/group";
import * as _27 from "./deployment/v1beta2/groupid";
import * as _28 from "./deployment/v1beta2/groupmsg";
import * as _29 from "./deployment/v1beta2/groupspec";
import * as _30 from "./deployment/v1beta2/params";
import * as _31 from "./deployment/v1beta2/query";
import * as _32 from "./deployment/v1beta2/resource";
import * as _33 from "./deployment/v1beta2/service";
import * as _34 from "./escrow/v1beta1/genesis";
import * as _35 from "./escrow/v1beta1/query";
import * as _36 from "./escrow/v1beta1/types";
import * as _37 from "./escrow/v1beta2/genesis";
import * as _38 from "./escrow/v1beta2/query";
import * as _39 from "./escrow/v1beta2/types";
import * as _40 from "./inflation/v1beta2/genesis";
import * as _41 from "./inflation/v1beta2/params";
import * as _42 from "./market/v1beta2/bid";
import * as _43 from "./market/v1beta2/genesis";
import * as _44 from "./market/v1beta2/lease";
import * as _45 from "./market/v1beta2/order";
import * as _46 from "./market/v1beta2/params";
import * as _47 from "./market/v1beta2/query";
import * as _48 from "./market/v1beta2/service";
import * as _49 from "./provider/v1beta1/provider";
import * as _50 from "./provider/v1beta2/genesis";
import * as _51 from "./provider/v1beta2/provider";
import * as _52 from "./provider/v1beta2/query";
import * as _373 from "./audit/v1beta1/audit.amino";
import * as _374 from "./audit/v1beta2/audit.amino";
import * as _375 from "./cert/v1beta2/cert.amino";
import * as _376 from "./deployment/v1beta1/deployment.amino";
import * as _377 from "./deployment/v1beta2/service.amino";
import * as _378 from "./market/v1beta2/service.amino";
import * as _379 from "./provider/v1beta1/provider.amino";
import * as _380 from "./provider/v1beta2/provider.amino";
import * as _381 from "./audit/v1beta1/audit.registry";
import * as _382 from "./audit/v1beta2/audit.registry";
import * as _383 from "./cert/v1beta2/cert.registry";
import * as _384 from "./deployment/v1beta1/deployment.registry";
import * as _385 from "./deployment/v1beta2/service.registry";
import * as _386 from "./market/v1beta2/service.registry";
import * as _387 from "./provider/v1beta1/provider.registry";
import * as _388 from "./provider/v1beta2/provider.registry";
import * as _389 from "./audit/v1beta2/query.rpc.Query";
import * as _390 from "./cert/v1beta2/query.rpc.Query";
import * as _391 from "./deployment/v1beta1/query.rpc.Query";
import * as _392 from "./deployment/v1beta2/query.rpc.Query";
import * as _393 from "./escrow/v1beta1/query.rpc.Query";
import * as _394 from "./escrow/v1beta2/query.rpc.Query";
import * as _395 from "./market/v1beta2/query.rpc.Query";
import * as _396 from "./provider/v1beta2/query.rpc.Query";
import * as _397 from "./audit/v1beta1/audit.rpc.msg";
import * as _398 from "./audit/v1beta2/audit.rpc.msg";
import * as _399 from "./cert/v1beta2/cert.rpc.msg";
import * as _400 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _401 from "./deployment/v1beta2/service.rpc.msg";
import * as _402 from "./market/v1beta2/service.rpc.msg";
import * as _403 from "./provider/v1beta1/provider.rpc.msg";
import * as _404 from "./provider/v1beta2/provider.rpc.msg";
import * as _599 from "./rpc.query";
import * as _600 from "./rpc.tx";
export var akash;
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
})(akash || (akash = {}));
