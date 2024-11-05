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
exports.umee = void 0;
//@ts-nocheck
const _362 = __importStar(require("./leverage/v1/events"));
const _363 = __importStar(require("./leverage/v1/genesis"));
const _364 = __importStar(require("./leverage/v1/gov"));
const _365 = __importStar(require("./leverage/v1/leverage"));
const _366 = __importStar(require("./leverage/v1/query"));
const _367 = __importStar(require("./leverage/v1/tx"));
const _368 = __importStar(require("./oracle/v1/events"));
const _369 = __importStar(require("./oracle/v1/genesis"));
const _370 = __importStar(require("./oracle/v1/oracle"));
const _371 = __importStar(require("./oracle/v1/query"));
const _372 = __importStar(require("./oracle/v1/tx"));
const _591 = __importStar(require("./leverage/v1/tx.amino"));
const _592 = __importStar(require("./oracle/v1/tx.amino"));
const _593 = __importStar(require("./leverage/v1/tx.registry"));
const _594 = __importStar(require("./oracle/v1/tx.registry"));
const _595 = __importStar(require("./leverage/v1/query.rpc.Query"));
const _596 = __importStar(require("./oracle/v1/query.rpc.Query"));
const _597 = __importStar(require("./leverage/v1/tx.rpc.msg"));
const _598 = __importStar(require("./oracle/v1/tx.rpc.msg"));
const _626 = __importStar(require("./rpc.query"));
const _627 = __importStar(require("./rpc.tx"));
var umee;
(function (umee) {
    let leverage;
    (function (leverage) {
        leverage.v1 = {
            ..._362,
            ..._363,
            ..._364,
            ..._365,
            ..._366,
            ..._367,
            ..._591,
            ..._593,
            ..._595,
            ..._597
        };
    })(leverage = umee.leverage || (umee.leverage = {}));
    let oracle;
    (function (oracle) {
        oracle.v1 = {
            ..._368,
            ..._369,
            ..._370,
            ..._371,
            ..._372,
            ..._592,
            ..._594,
            ..._596,
            ..._598
        };
    })(oracle = umee.oracle || (umee.oracle = {}));
    umee.ClientFactory = {
        ..._626,
        ..._627
    };
})(umee || (exports.umee = umee = {}));
