import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const regenAminoConverters: {
    "/regen.group.v1alpha1.MsgCreateGroup": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgCreateGroup) => import("./group/v1alpha1/tx").MsgCreateGroupAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgCreateGroupAmino) => import("./group/v1alpha1/tx").MsgCreateGroup;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgUpdateGroupMembers) => import("./group/v1alpha1/tx").MsgUpdateGroupMembersAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgUpdateGroupMembersAmino) => import("./group/v1alpha1/tx").MsgUpdateGroupMembers;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgUpdateGroupAdmin) => import("./group/v1alpha1/tx").MsgUpdateGroupAdminAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgUpdateGroupAdminAmino) => import("./group/v1alpha1/tx").MsgUpdateGroupAdmin;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgUpdateGroupMetadata) => import("./group/v1alpha1/tx").MsgUpdateGroupMetadataAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgUpdateGroupMetadataAmino) => import("./group/v1alpha1/tx").MsgUpdateGroupMetadata;
    };
    "/regen.group.v1alpha1.MsgCreateGroupAccount": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgCreateGroupAccount) => import("./group/v1alpha1/tx").MsgCreateGroupAccountAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgCreateGroupAccountAmino) => import("./group/v1alpha1/tx").MsgCreateGroupAccount;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgUpdateGroupAccountAdmin) => import("./group/v1alpha1/tx").MsgUpdateGroupAccountAdminAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgUpdateGroupAccountAdminAmino) => import("./group/v1alpha1/tx").MsgUpdateGroupAccountAdmin;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgUpdateGroupAccountDecisionPolicy) => import("./group/v1alpha1/tx").MsgUpdateGroupAccountDecisionPolicyAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgUpdateGroupAccountDecisionPolicyAmino) => import("./group/v1alpha1/tx").MsgUpdateGroupAccountDecisionPolicy;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgUpdateGroupAccountMetadata) => import("./group/v1alpha1/tx").MsgUpdateGroupAccountMetadataAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgUpdateGroupAccountMetadataAmino) => import("./group/v1alpha1/tx").MsgUpdateGroupAccountMetadata;
    };
    "/regen.group.v1alpha1.MsgCreateProposal": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgCreateProposal) => import("./group/v1alpha1/tx").MsgCreateProposalAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgCreateProposalAmino) => import("./group/v1alpha1/tx").MsgCreateProposal;
    };
    "/regen.group.v1alpha1.MsgVote": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgVote) => import("./group/v1alpha1/tx").MsgVoteAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgVoteAmino) => import("./group/v1alpha1/tx").MsgVote;
    };
    "/regen.group.v1alpha1.MsgExec": {
        aminoType: string;
        toAmino: (message: import("./group/v1alpha1/tx").MsgExec) => import("./group/v1alpha1/tx").MsgExecAmino;
        fromAmino: (object: import("./group/v1alpha1/tx").MsgExecAmino) => import("./group/v1alpha1/tx").MsgExec;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateClass": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgCreateClass) => import("./ecocredit/v1alpha1/tx").MsgCreateClassAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgCreateClassAmino) => import("./ecocredit/v1alpha1/tx").MsgCreateClass;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgCreateBatch) => import("./ecocredit/v1alpha1/tx").MsgCreateBatchAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgCreateBatchAmino) => import("./ecocredit/v1alpha1/tx").MsgCreateBatch;
    };
    "/regen.ecocredit.v1alpha1.MsgSend": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgSend) => import("./ecocredit/v1alpha1/tx").MsgSendAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgSendAmino) => import("./ecocredit/v1alpha1/tx").MsgSend;
    };
    "/regen.ecocredit.v1alpha1.MsgRetire": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgRetire) => import("./ecocredit/v1alpha1/tx").MsgRetireAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgRetireAmino) => import("./ecocredit/v1alpha1/tx").MsgRetire;
    };
    "/regen.ecocredit.v1alpha1.MsgCancel": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgCancel) => import("./ecocredit/v1alpha1/tx").MsgCancelAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgCancelAmino) => import("./ecocredit/v1alpha1/tx").MsgCancel;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdmin) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdminAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdminAmino) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuers) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuersAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuersAmino) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadata) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadataAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadataAmino) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCreateClass) => import("./ecocredit/v1/tx").MsgCreateClassAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCreateClassAmino) => import("./ecocredit/v1/tx").MsgCreateClass;
    };
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCreateProject) => import("./ecocredit/v1/tx").MsgCreateProjectAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCreateProjectAmino) => import("./ecocredit/v1/tx").MsgCreateProject;
    };
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCreateBatch) => import("./ecocredit/v1/tx").MsgCreateBatchAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCreateBatchAmino) => import("./ecocredit/v1/tx").MsgCreateBatch;
    };
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgMintBatchCredits) => import("./ecocredit/v1/tx").MsgMintBatchCreditsAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgMintBatchCreditsAmino) => import("./ecocredit/v1/tx").MsgMintBatchCredits;
    };
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgSealBatch) => import("./ecocredit/v1/tx").MsgSealBatchAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgSealBatchAmino) => import("./ecocredit/v1/tx").MsgSealBatch;
    };
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgSend) => import("./ecocredit/v1/tx").MsgSendAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgSendAmino) => import("./ecocredit/v1/tx").MsgSend;
    };
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgRetire) => import("./ecocredit/v1/tx").MsgRetireAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgRetireAmino) => import("./ecocredit/v1/tx").MsgRetire;
    };
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCancel) => import("./ecocredit/v1/tx").MsgCancelAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCancelAmino) => import("./ecocredit/v1/tx").MsgCancel;
    };
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateClassAdmin) => import("./ecocredit/v1/tx").MsgUpdateClassAdminAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateClassAdminAmino) => import("./ecocredit/v1/tx").MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateClassIssuers) => import("./ecocredit/v1/tx").MsgUpdateClassIssuersAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateClassIssuersAmino) => import("./ecocredit/v1/tx").MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateClassMetadata) => import("./ecocredit/v1/tx").MsgUpdateClassMetadataAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateClassMetadataAmino) => import("./ecocredit/v1/tx").MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateProjectAdmin) => import("./ecocredit/v1/tx").MsgUpdateProjectAdminAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateProjectAdminAmino) => import("./ecocredit/v1/tx").MsgUpdateProjectAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateProjectMetadata) => import("./ecocredit/v1/tx").MsgUpdateProjectMetadataAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateProjectMetadataAmino) => import("./ecocredit/v1/tx").MsgUpdateProjectMetadata;
    };
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgSell) => import("./ecocredit/marketplace/v1/tx").MsgSellAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgSellAmino) => import("./ecocredit/marketplace/v1/tx").MsgSell;
    };
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrders) => import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrdersAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrdersAmino) => import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrders;
    };
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrder) => import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrderAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrderAmino) => import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrder;
    };
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgBuyDirect) => import("./ecocredit/marketplace/v1/tx").MsgBuyDirectAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgBuyDirectAmino) => import("./ecocredit/marketplace/v1/tx").MsgBuyDirect;
    };
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgCreate) => import("./ecocredit/basket/v1/tx").MsgCreateAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgCreateAmino) => import("./ecocredit/basket/v1/tx").MsgCreate;
    };
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgPut) => import("./ecocredit/basket/v1/tx").MsgPutAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgPutAmino) => import("./ecocredit/basket/v1/tx").MsgPut;
    };
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgTake) => import("./ecocredit/basket/v1/tx").MsgTakeAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgTakeAmino) => import("./ecocredit/basket/v1/tx").MsgTake;
    };
    "/regen.data.v1alpha2.MsgAnchorData": {
        aminoType: string;
        toAmino: (message: import("./data/v1alpha2/tx").MsgAnchorData) => import("./data/v1alpha2/tx").MsgAnchorDataAmino;
        fromAmino: (object: import("./data/v1alpha2/tx").MsgAnchorDataAmino) => import("./data/v1alpha2/tx").MsgAnchorData;
    };
    "/regen.data.v1alpha2.MsgSignData": {
        aminoType: string;
        toAmino: (message: import("./data/v1alpha2/tx").MsgSignData) => import("./data/v1alpha2/tx").MsgSignDataAmino;
        fromAmino: (object: import("./data/v1alpha2/tx").MsgSignDataAmino) => import("./data/v1alpha2/tx").MsgSignData;
    };
    "/regen.data.v1alpha2.MsgStoreRawData": {
        aminoType: string;
        toAmino: (message: import("./data/v1alpha2/tx").MsgStoreRawData) => import("./data/v1alpha2/tx").MsgStoreRawDataAmino;
        fromAmino: (object: import("./data/v1alpha2/tx").MsgStoreRawDataAmino) => import("./data/v1alpha2/tx").MsgStoreRawData;
    };
    "/regen.data.v1.MsgAnchor": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgAnchor) => import("./data/v1/tx").MsgAnchorAmino;
        fromAmino: (object: import("./data/v1/tx").MsgAnchorAmino) => import("./data/v1/tx").MsgAnchor;
    };
    "/regen.data.v1.MsgAttest": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgAttest) => import("./data/v1/tx").MsgAttestAmino;
        fromAmino: (object: import("./data/v1/tx").MsgAttestAmino) => import("./data/v1/tx").MsgAttest;
    };
    "/regen.data.v1.MsgDefineResolver": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgDefineResolver) => import("./data/v1/tx").MsgDefineResolverAmino;
        fromAmino: (object: import("./data/v1/tx").MsgDefineResolverAmino) => import("./data/v1/tx").MsgDefineResolver;
    };
    "/regen.data.v1.MsgRegisterResolver": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgRegisterResolver) => import("./data/v1/tx").MsgRegisterResolverAmino;
        fromAmino: (object: import("./data/v1/tx").MsgRegisterResolverAmino) => import("./data/v1/tx").MsgRegisterResolver;
    };
};
export declare const regenProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningRegenClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningRegenClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
