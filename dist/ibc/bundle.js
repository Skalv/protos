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
exports.ibc = void 0;
//@ts-nocheck
const _156 = __importStar(require("./applications/transfer/v1/genesis"));
const _157 = __importStar(require("./applications/transfer/v1/query"));
const _158 = __importStar(require("./applications/transfer/v1/transfer"));
const _159 = __importStar(require("./applications/transfer/v1/tx"));
const _160 = __importStar(require("./applications/transfer/v2/packet"));
const _161 = __importStar(require("./core/channel/v1/channel"));
const _162 = __importStar(require("./core/channel/v1/genesis"));
const _163 = __importStar(require("./core/channel/v1/query"));
const _164 = __importStar(require("./core/channel/v1/tx"));
const _165 = __importStar(require("./core/client/v1/client"));
const _166 = __importStar(require("./core/client/v1/genesis"));
const _167 = __importStar(require("./core/client/v1/query"));
const _168 = __importStar(require("./core/client/v1/tx"));
const _169 = __importStar(require("./core/commitment/v1/commitment"));
const _170 = __importStar(require("./core/connection/v1/connection"));
const _171 = __importStar(require("./core/connection/v1/genesis"));
const _172 = __importStar(require("./core/connection/v1/query"));
const _173 = __importStar(require("./core/connection/v1/tx"));
const _174 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _175 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _176 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _177 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _456 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _457 = __importStar(require("./core/channel/v1/tx.amino"));
const _458 = __importStar(require("./core/client/v1/tx.amino"));
const _459 = __importStar(require("./core/connection/v1/tx.amino"));
const _460 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _461 = __importStar(require("./core/channel/v1/tx.registry"));
const _462 = __importStar(require("./core/client/v1/tx.registry"));
const _463 = __importStar(require("./core/connection/v1/tx.registry"));
const _464 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _465 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _466 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _467 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _468 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _469 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _470 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _471 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _607 = __importStar(require("./rpc.query"));
const _608 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._156,
                ..._157,
                ..._158,
                ..._159,
                ..._456,
                ..._460,
                ..._464,
                ..._468
            };
            transfer.v2 = {
                ..._160
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._161,
                ..._162,
                ..._163,
                ..._164,
                ..._457,
                ..._461,
                ..._465,
                ..._469
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._165,
                ..._166,
                ..._167,
                ..._168,
                ..._458,
                ..._462,
                ..._466,
                ..._470
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._169
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._170,
                ..._171,
                ..._172,
                ..._173,
                ..._459,
                ..._463,
                ..._467,
                ..._471
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._174
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._175
            };
            solomachine.v2 = {
                ..._176
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._177
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._607,
        ..._608
    };
})(ibc || (exports.ibc = ibc = {}));
