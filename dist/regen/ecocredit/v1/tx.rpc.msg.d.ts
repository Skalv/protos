import { Rpc } from "../../../helpers";
import { MsgCreateClass, MsgCreateClassResponse, MsgCreateProject, MsgCreateProjectResponse, MsgCreateBatch, MsgCreateBatchResponse, MsgMintBatchCredits, MsgMintBatchCreditsResponse, MsgSealBatch, MsgSealBatchResponse, MsgSend, MsgSendResponse, MsgRetire, MsgRetireResponse, MsgCancel, MsgCancelResponse, MsgUpdateClassAdmin, MsgUpdateClassAdminResponse, MsgUpdateClassIssuers, MsgUpdateClassIssuersResponse, MsgUpdateClassMetadata, MsgUpdateClassMetadataResponse, MsgUpdateProjectAdmin, MsgUpdateProjectAdminResponse, MsgUpdateProjectMetadata, MsgUpdateProjectMetadataResponse } from "./tx";
/** Msg is the regen.ecocredit.v1 Msg service. */
export interface Msg {
    /**
     * CreateClass creates a new credit class with an approved list of issuers and
     * optional metadata.
     */
    createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    /** CreateProject creates a new project within a credit class. */
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    /**
     * CreateBatch creates a new batch of credits for an existing project.
     * This will create a new batch denom with a fixed supply. Issued credits can
     * be distributed to recipients in either tradable or retired form.
     */
    createBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse>;
    /**
     * MintBatchCredits issues new token in a given batch.
     * The issuer must be the account who created (or delegated using x/authz),
     * the batch.
     * The request will fail if the batch is not open (is sealed).
     * NOTE: this method is only for bridge purpose. It must not be used
     * for issuing native credits on Regen. More specifically, we
     * enable minting more credits in an existing batch, when the batch
     * represents a vintage originally registered in another chain.
     */
    mintBatchCredits(request: MsgMintBatchCredits): Promise<MsgMintBatchCreditsResponse>;
    /**
     * MsgSealBatch sets the `batch.open` attribute to false. Sealed batch
     * can't issue more credits. Once batch is sealed it can't be toggled any
     * more. Only batch creator can seal a batch.
     */
    sealBatch(request: MsgSealBatch): Promise<MsgSealBatchResponse>;
    /**
     * Send sends tradable credits from one account to another account. Sent
     * credits can either be tradable or retired on receipt.
     */
    send(request: MsgSend): Promise<MsgSendResponse>;
    /** Retire retires a specified number of credits in the holder's account. */
    retire(request: MsgRetire): Promise<MsgRetireResponse>;
    /**
     * Cancel removes a number of credits from the holder's account and also
     * deducts them from the tradable supply, effectively cancelling their
     * issuance on Regen Ledger
     */
    cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    /** UpdateClassAdmin updates the credit class admin */
    updateClassAdmin(request: MsgUpdateClassAdmin): Promise<MsgUpdateClassAdminResponse>;
    /** UpdateClassIssuers updates the credit class issuer list */
    updateClassIssuers(request: MsgUpdateClassIssuers): Promise<MsgUpdateClassIssuersResponse>;
    /** UpdateClassMetadata updates the credit class metadata */
    updateClassMetadata(request: MsgUpdateClassMetadata): Promise<MsgUpdateClassMetadataResponse>;
    /** UpdateProjectAdmin updates the project admin address */
    updateProjectAdmin(request: MsgUpdateProjectAdmin): Promise<MsgUpdateProjectAdminResponse>;
    /** UpdateProjectMetadata updates the project metadata */
    updateProjectMetadata(request: MsgUpdateProjectMetadata): Promise<MsgUpdateProjectMetadataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    createBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse>;
    mintBatchCredits(request: MsgMintBatchCredits): Promise<MsgMintBatchCreditsResponse>;
    sealBatch(request: MsgSealBatch): Promise<MsgSealBatchResponse>;
    send(request: MsgSend): Promise<MsgSendResponse>;
    retire(request: MsgRetire): Promise<MsgRetireResponse>;
    cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    updateClassAdmin(request: MsgUpdateClassAdmin): Promise<MsgUpdateClassAdminResponse>;
    updateClassIssuers(request: MsgUpdateClassIssuers): Promise<MsgUpdateClassIssuersResponse>;
    updateClassMetadata(request: MsgUpdateClassMetadata): Promise<MsgUpdateClassMetadataResponse>;
    updateProjectAdmin(request: MsgUpdateProjectAdmin): Promise<MsgUpdateProjectAdminResponse>;
    updateProjectMetadata(request: MsgUpdateProjectMetadata): Promise<MsgUpdateProjectMetadataResponse>;
}
