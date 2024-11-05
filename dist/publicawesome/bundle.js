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
exports.publicawesome = void 0;
//@ts-nocheck
const _339 = __importStar(require("../stargaze/alloc/v1beta1/genesis"));
const _340 = __importStar(require("../stargaze/alloc/v1beta1/params"));
const _341 = __importStar(require("../stargaze/alloc/v1beta1/query"));
const _342 = __importStar(require("../stargaze/alloc/v1beta1/tx"));
const _343 = __importStar(require("../stargaze/claim/v1beta1/claim_record"));
const _344 = __importStar(require("../stargaze/claim/v1beta1/genesis"));
const _345 = __importStar(require("../stargaze/claim/v1beta1/params"));
const _346 = __importStar(require("../stargaze/claim/v1beta1/query"));
const _347 = __importStar(require("../stargaze/claim/v1beta1/tx"));
const _582 = __importStar(require("../stargaze/alloc/v1beta1/tx.amino"));
const _583 = __importStar(require("../stargaze/claim/v1beta1/tx.amino"));
const _584 = __importStar(require("../stargaze/alloc/v1beta1/tx.registry"));
const _585 = __importStar(require("../stargaze/claim/v1beta1/tx.registry"));
const _586 = __importStar(require("../stargaze/alloc/v1beta1/query.rpc.Query"));
const _587 = __importStar(require("../stargaze/claim/v1beta1/query.rpc.Query"));
const _588 = __importStar(require("../stargaze/alloc/v1beta1/tx.rpc.msg"));
const _589 = __importStar(require("../stargaze/claim/v1beta1/tx.rpc.msg"));
const _623 = __importStar(require("./rpc.query"));
const _624 = __importStar(require("./rpc.tx"));
var publicawesome;
(function (publicawesome) {
    let stargaze;
    (function (stargaze) {
        let alloc;
        (function (alloc) {
            alloc.v1beta1 = {
                ..._339,
                ..._340,
                ..._341,
                ..._342,
                ..._582,
                ..._584,
                ..._586,
                ..._588
            };
        })(alloc = stargaze.alloc || (stargaze.alloc = {}));
        let claim;
        (function (claim) {
            claim.v1beta1 = {
                ..._343,
                ..._344,
                ..._345,
                ..._346,
                ..._347,
                ..._583,
                ..._585,
                ..._587,
                ..._589
            };
        })(claim = stargaze.claim || (stargaze.claim = {}));
    })(stargaze = publicawesome.stargaze || (publicawesome.stargaze = {}));
    publicawesome.ClientFactory = {
        ..._623,
        ..._624
    };
})(publicawesome || (exports.publicawesome = publicawesome = {}));
