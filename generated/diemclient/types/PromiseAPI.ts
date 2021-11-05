import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountSignature } from '../models/AccountSignature';
import { BlockMetadataTransaction } from '../models/BlockMetadataTransaction';
import { BlockMetadataTransactionProperties } from '../models/BlockMetadataTransactionProperties';
import { DeleteModule } from '../models/DeleteModule';
import { DeleteResource } from '../models/DeleteResource';
import { DirectWriteSet } from '../models/DirectWriteSet';
import { Ed25519Signature } from '../models/Ed25519Signature';
import { Event } from '../models/Event';
import { GenesisTransaction } from '../models/GenesisTransaction';
import { GenesisTransactionProperties } from '../models/GenesisTransactionProperties';
import { InlineResponse200 } from '../models/InlineResponse200';
import { LedgerInfo } from '../models/LedgerInfo';
import { ModelError } from '../models/ModelError';
import { MoveAbility } from '../models/MoveAbility';
import { MoveFunction } from '../models/MoveFunction';
import { MoveFunctionGenericTypeParams } from '../models/MoveFunctionGenericTypeParams';
import { MoveModule } from '../models/MoveModule';
import { MoveModuleBytecode } from '../models/MoveModuleBytecode';
import { MoveModuleBytecodePayload } from '../models/MoveModuleBytecodePayload';
import { MoveResource } from '../models/MoveResource';
import { MoveScriptBytecode } from '../models/MoveScriptBytecode';
import { MoveStruct } from '../models/MoveStruct';
import { MoveStructField } from '../models/MoveStructField';
import { MoveStructGenericTypeParams } from '../models/MoveStructGenericTypeParams';
import { MultiAgentSignature } from '../models/MultiAgentSignature';
import { MultiEd25519Signature } from '../models/MultiEd25519Signature';
import { OnChainTransaction } from '../models/OnChainTransaction';
import { OnChainTransactionInfo } from '../models/OnChainTransactionInfo';
import { PendingTransaction } from '../models/PendingTransaction';
import { PendingTransactionProperties } from '../models/PendingTransactionProperties';
import { Script } from '../models/Script';
import { ScriptFunctionPayload } from '../models/ScriptFunctionPayload';
import { ScriptPayload } from '../models/ScriptPayload';
import { ScriptWriteSet } from '../models/ScriptWriteSet';
import { SubmitTransactionRequest } from '../models/SubmitTransactionRequest';
import { Transaction } from '../models/Transaction';
import { TransactionPayload } from '../models/TransactionPayload';
import { TransactionSignature } from '../models/TransactionSignature';
import { UserTransaction } from '../models/UserTransaction';
import { UserTransactionProperties } from '../models/UserTransactionProperties';
import { UserTransactionRequest } from '../models/UserTransactionRequest';
import { UserTransactionSignature } from '../models/UserTransactionSignature';
import { WriteModule } from '../models/WriteModule';
import { WriteResource } from '../models/WriteResource';
import { WriteSet } from '../models/WriteSet';
import { WriteSetChange } from '../models/WriteSetChange';
import { WriteSetPayload } from '../models/WriteSetPayload';
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get account modules
     * @param address 
     */
    public getAccountModules(address: string, _options?: Configuration): Promise<Array<MoveModuleBytecode>> {
        const result = this.api.getAccountModules(address, _options);
        return result.toPromise();
    }

    /**
     * This API returns account modules for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.
     * Get account modules by ledger version
     * @param ledgerVersion 
     * @param address 
     */
    public getAccountModulesByVersion(ledgerVersion: string, address: string, _options?: Configuration): Promise<Array<MoveModuleBytecode>> {
        const result = this.api.getAccountModulesByVersion(ledgerVersion, address, _options);
        return result.toPromise();
    }

    /**
     * Get account resources
     * @param address 
     */
    public getAccountResources(address: string, _options?: Configuration): Promise<Array<MoveResource>> {
        const result = this.api.getAccountResources(address, _options);
        return result.toPromise();
    }

    /**
     * This API returns account resources for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.
     * Get account resources by ledger version
     * @param ledgerVersion 
     * @param address 
     */
    public getAccountResourcesByVersion(ledgerVersion: string, address: string, _options?: Configuration): Promise<Array<MoveResource>> {
        const result = this.api.getAccountResourcesByVersion(ledgerVersion, address, _options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API extracts event key from the account resource identified by the `event_handle_struct` and `field_name`, then returns events identified by the event key.
     * Get events by event handle
     * @param address 
     * @param eventHandleStruct 
     * @param fieldName The field name of the &#x60;EventHandle&#x60; in the struct.
     */
    public getAccountEvents(address: string, eventHandleStruct: string, fieldName: string, _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.getAccountEvents(address, eventHandleStruct, fieldName, _options);
        return result.toPromise();
    }

    /**
     * Get events by event key
     * @param eventKey Event key for an event stream. It is BCS serialized bytes of &#x60;guid&#x60; field in the Move struct &#x60;EventHandle&#x60;.
     */
    public getEvents(eventKey: string, _options?: Configuration): Promise<Array<Event>> {
        const result = this.api.getEvents(eventKey, _options);
        return result.toPromise();
    }


}



import { ObservableGeneralApi } from './ObservableAPI';

import { GeneralApiRequestFactory, GeneralApiResponseProcessor} from "../apis/GeneralApi";
export class PromiseGeneralApi {
    private api: ObservableGeneralApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GeneralApiRequestFactory,
        responseProcessor?: GeneralApiResponseProcessor
    ) {
        this.api = new ObservableGeneralApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ledger information
     */
    public getLedgerInfo(_options?: Configuration): Promise<LedgerInfo> {
        const result = this.api.getLedgerInfo(_options);
        return result.toPromise();
    }

    /**
     * API document
     */
    public getSpecHtml(_options?: Configuration): Promise<void> {
        const result = this.api.getSpecHtml(_options);
        return result.toPromise();
    }

    /**
     * OpenAPI specification
     */
    public getSpecYaml(_options?: Configuration): Promise<void> {
        const result = this.api.getSpecYaml(_options);
        return result.toPromise();
    }


}



import { ObservableTransactionsApi } from './ObservableAPI';

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class PromiseTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API creates transaction signing message for client to create transaction signature.  The success response contains hex-encoded signing message bytes.  **To sign the message**    1. Client first needs to HEX decode the `message` into bytes.   2. Then sign the bytes to create signature.
     * Create transaction signing message
     * @param userTransactionRequest User transaction request
     */
    public createSigningMessage(userTransactionRequest: UserTransactionRequest, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.createSigningMessage(userTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * There are two type transaction identifiers:    1. Tranasction hash: included in any transaction JSON respond from server.   2. Transaction version: included in on-chain transaction JSON respond from server.   When given transaction hash, server first looks up on-chain transaction by hash; if no on-chain transaction found, then look up transaction by hash in the mempool (pending) transactions.  When given transaction version, server looks up the transaction on-chain by version.  To create transaction hash:   1. Create hash message bytes: \"DIEM::Transaction\" bytes + BCS bytes of [Transaction](https://diem.github.io/diem/diem_types/transaction/enum.Transaction.html).   2. Apply hash algorithm `SHA3-256` to the hash message bytes.   3. Hex-encode the hash bytes with `0x` prefix.
     * Get transaction
     * @param txnHashOrVersion * Transaction hash should be hex-encoded bytes string with &#x60;0x&#x60; prefix. * Transaction version is an &#x60;uint64&#x60; number.
     */
    public getTransaction(txnHashOrVersion: string, _options?: Configuration): Promise<Transaction> {
        const result = this.api.getTransaction(txnHashOrVersion, _options);
        return result.toPromise();
    }

    /**
     * Get transactions
     * @param start The start transaction version of the page.
     * @param limit The max number of transactions should be returned for the page.
     */
    public getTransactions(start?: number, limit?: number, _options?: Configuration): Promise<Array<OnChainTransaction>> {
        const result = this.api.getTransactions(start, limit, _options);
        return result.toPromise();
    }

    /**
     * **Submit transaction using JSON without additional tools**    * Send [POST /transactions/signing_message](#operation/create-signing-message) to create transaction signing message.   * Sign the transaction signing message and create transaction signature.   * Submit the user transaction request with the transaction siganture. The request header \"Content-Type\" must set to \"application/json\".  **Submit transaction using signed transaction BCS bytes**    * Generate Diem core types and transaction script functions for the client application langauge     by [Tranaction Builder](https://github.com/diem/diem/tree/main/language/transaction-builder/generator)   * Create [RawTransaction](https://diem.github.io/diem/diem_types/transaction/struct.RawTransaction.html).   * Create transaction signing message: bytes(\"DIEM::RawTransaction\") + BCS bytes of the RawTransaction.     See [Crypto Spec](https://github.com/diem/diem/blob/main/specifications/crypto/README.md) for more details.   * Sign the transaction signing message and create transaction signature.   * Create [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html).   * Serialize [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html)     into BCS bytes.   * Submit the [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html)     BCS bytes (do not hex-encoded it). The request header \"Content-Type\" must set to \"application/vnd.bcs+signed_transaction\".
     * Submit transaction
     * @param submitTransactionRequest User transaction request with transaction sender&#39;s signature.
     */
    public submitTransaction(submitTransactionRequest: SubmitTransactionRequest, _options?: Configuration): Promise<PendingTransaction> {
        const result = this.api.submitTransaction(submitTransactionRequest, _options);
        return result.toPromise();
    }


}



