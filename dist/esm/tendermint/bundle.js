//@ts-nocheck
import * as _351 from "./abci/types";
import * as _352 from "./crypto/keys";
import * as _353 from "./crypto/proof";
import * as _354 from "./libs/bits/types";
import * as _355 from "./p2p/types";
import * as _356 from "./types/block";
import * as _357 from "./types/evidence";
import * as _358 from "./types/params";
import * as _359 from "./types/types";
import * as _360 from "./types/validator";
import * as _361 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._351
    };
    tendermint.crypto = {
        ..._352,
        ..._353
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._354
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._355
    };
    tendermint.types = {
        ..._356,
        ..._357,
        ..._358,
        ..._359,
        ..._360
    };
    tendermint.version = {
        ..._361
    };
})(tendermint || (tendermint = {}));
