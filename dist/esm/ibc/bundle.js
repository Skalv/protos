//@ts-nocheck
import * as _156 from "./applications/transfer/v1/genesis";
import * as _157 from "./applications/transfer/v1/query";
import * as _158 from "./applications/transfer/v1/transfer";
import * as _159 from "./applications/transfer/v1/tx";
import * as _160 from "./applications/transfer/v2/packet";
import * as _161 from "./core/channel/v1/channel";
import * as _162 from "./core/channel/v1/genesis";
import * as _163 from "./core/channel/v1/query";
import * as _164 from "./core/channel/v1/tx";
import * as _165 from "./core/client/v1/client";
import * as _166 from "./core/client/v1/genesis";
import * as _167 from "./core/client/v1/query";
import * as _168 from "./core/client/v1/tx";
import * as _169 from "./core/commitment/v1/commitment";
import * as _170 from "./core/connection/v1/connection";
import * as _171 from "./core/connection/v1/genesis";
import * as _172 from "./core/connection/v1/query";
import * as _173 from "./core/connection/v1/tx";
import * as _174 from "./lightclients/localhost/v1/localhost";
import * as _175 from "./lightclients/solomachine/v1/solomachine";
import * as _176 from "./lightclients/solomachine/v2/solomachine";
import * as _177 from "./lightclients/tendermint/v1/tendermint";
import * as _456 from "./applications/transfer/v1/tx.amino";
import * as _457 from "./core/channel/v1/tx.amino";
import * as _458 from "./core/client/v1/tx.amino";
import * as _459 from "./core/connection/v1/tx.amino";
import * as _460 from "./applications/transfer/v1/tx.registry";
import * as _461 from "./core/channel/v1/tx.registry";
import * as _462 from "./core/client/v1/tx.registry";
import * as _463 from "./core/connection/v1/tx.registry";
import * as _464 from "./applications/transfer/v1/query.rpc.Query";
import * as _465 from "./core/channel/v1/query.rpc.Query";
import * as _466 from "./core/client/v1/query.rpc.Query";
import * as _467 from "./core/connection/v1/query.rpc.Query";
import * as _468 from "./applications/transfer/v1/tx.rpc.msg";
import * as _469 from "./core/channel/v1/tx.rpc.msg";
import * as _470 from "./core/client/v1/tx.rpc.msg";
import * as _471 from "./core/connection/v1/tx.rpc.msg";
import * as _607 from "./rpc.query";
import * as _608 from "./rpc.tx";
export var ibc;
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
})(ibc || (ibc = {}));
