//@ts-nocheck
import * as _178 from "./auction/v1beta1/auction";
import * as _179 from "./auction/v1beta1/genesis";
import * as _180 from "./auction/v1beta1/query";
import * as _181 from "./auction/v1beta1/tx";
import * as _182 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _183 from "./exchange/v1beta1/authz";
import * as _184 from "./exchange/v1beta1/events";
import * as _185 from "./exchange/v1beta1/exchange";
import * as _186 from "./exchange/v1beta1/genesis";
import * as _187 from "./exchange/v1beta1/query";
import * as _188 from "./exchange/v1beta1/tx";
import * as _189 from "./insurance/v1beta1/genesis";
import * as _190 from "./insurance/v1beta1/insurance";
import * as _191 from "./insurance/v1beta1/query";
import * as _192 from "./insurance/v1beta1/tx";
import * as _193 from "./ocr/v1beta1/genesis";
import * as _194 from "./ocr/v1beta1/ocr";
import * as _195 from "./ocr/v1beta1/query";
import * as _196 from "./ocr/v1beta1/tx";
import * as _197 from "./oracle/v1beta1/events";
import * as _198 from "./oracle/v1beta1/genesis";
import * as _199 from "./oracle/v1beta1/oracle";
import * as _200 from "./oracle/v1beta1/proposal";
import * as _201 from "./oracle/v1beta1/query";
import * as _202 from "./oracle/v1beta1/tx";
import * as _203 from "./peggy/v1/attestation";
import * as _204 from "./peggy/v1/batch";
import * as _205 from "./peggy/v1/ethereum_signer";
import * as _206 from "./peggy/v1/events";
import * as _207 from "./peggy/v1/genesis";
import * as _208 from "./peggy/v1/msgs";
import * as _209 from "./peggy/v1/pool";
import * as _210 from "./peggy/v1/proposal";
import * as _211 from "./peggy/v1/query";
import * as _212 from "./peggy/v1/types";
import * as _213 from "./types/v1beta1/account";
import * as _214 from "./types/v1beta1/tx_ext";
import * as _215 from "./types/v1beta1/tx_response";
import * as _216 from "./wasmx/v1/genesis";
import * as _217 from "./wasmx/v1/query";
import * as _218 from "./wasmx/v1/tx";
import * as _219 from "./wasmx/v1/wasmx";
import * as _472 from "./auction/v1beta1/tx.amino";
import * as _473 from "./exchange/v1beta1/tx.amino";
import * as _474 from "./insurance/v1beta1/tx.amino";
import * as _475 from "./ocr/v1beta1/tx.amino";
import * as _476 from "./oracle/v1beta1/tx.amino";
import * as _477 from "./peggy/v1/msgs.amino";
import * as _478 from "./auction/v1beta1/tx.registry";
import * as _479 from "./exchange/v1beta1/tx.registry";
import * as _480 from "./insurance/v1beta1/tx.registry";
import * as _481 from "./ocr/v1beta1/tx.registry";
import * as _482 from "./oracle/v1beta1/tx.registry";
import * as _483 from "./peggy/v1/msgs.registry";
import * as _484 from "./auction/v1beta1/query.rpc.Query";
import * as _485 from "./exchange/v1beta1/query.rpc.Query";
import * as _486 from "./insurance/v1beta1/query.rpc.Query";
import * as _487 from "./ocr/v1beta1/query.rpc.Query";
import * as _488 from "./oracle/v1beta1/query.rpc.Query";
import * as _489 from "./peggy/v1/query.rpc.Query";
import * as _490 from "./wasmx/v1/query.rpc.Query";
import * as _491 from "./auction/v1beta1/tx.rpc.msg";
import * as _492 from "./exchange/v1beta1/tx.rpc.msg";
import * as _493 from "./insurance/v1beta1/tx.rpc.msg";
import * as _494 from "./ocr/v1beta1/tx.rpc.msg";
import * as _495 from "./oracle/v1beta1/tx.rpc.msg";
import * as _496 from "./peggy/v1/msgs.rpc.msg";
import * as _609 from "./rpc.query";
import * as _610 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = {
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._472,
      ..._478,
      ..._484,
      ..._491
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = {
        ..._182
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = {
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._473,
      ..._479,
      ..._485,
      ..._492
    };
  }
  export namespace insurance {
    export const v1beta1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._474,
      ..._480,
      ..._486,
      ..._493
    };
  }
  export namespace ocr {
    export const v1beta1 = {
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._475,
      ..._481,
      ..._487,
      ..._494
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._476,
      ..._482,
      ..._488,
      ..._495
    };
  }
  export namespace peggy {
    export const v1 = {
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._477,
      ..._483,
      ..._489,
      ..._496
    };
  }
  export namespace types {
    export const v1beta1 = {
      ..._213,
      ..._214,
      ..._215
    };
  }
  export namespace wasmx {
    export const v1 = {
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._490
    };
  }
  export const ClientFactory = {
    ..._609,
    ..._610
  };
}