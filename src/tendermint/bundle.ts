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
export namespace tendermint {
  export const abci = {
    ..._351
  };
  export const crypto = {
    ..._352,
    ..._353
  };
  export namespace libs {
    export const bits = {
      ..._354
    };
  }
  export const p2p = {
    ..._355
  };
  export const types = {
    ..._356,
    ..._357,
    ..._358,
    ..._359,
    ..._360
  };
  export const version = {
    ..._361
  };
}