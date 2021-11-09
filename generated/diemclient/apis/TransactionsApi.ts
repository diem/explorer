// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { InlineResponse200 } from '../models/InlineResponse200';
import { OnChainTransaction } from '../models/OnChainTransaction';
import { PendingTransaction } from '../models/PendingTransaction';
import { SubmitTransactionRequest } from '../models/SubmitTransactionRequest';
import { Transaction } from '../models/Transaction';
import { UserTransactionRequest } from '../models/UserTransactionRequest';

/**
 * no description
 */
export class TransactionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API creates transaction signing message for client to create transaction signature.  The success response contains hex-encoded signing message bytes.  **To sign the message**    1. Client first needs to HEX decode the `message` into bytes.   2. Then sign the bytes to create signature.
     * Create transaction signing message
     * @param userTransactionRequest User transaction request
     */
    public async createSigningMessage(userTransactionRequest: UserTransactionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userTransactionRequest' is not null or undefined
        if (userTransactionRequest === null || userTransactionRequest === undefined) {
            throw new RequiredError('Required parameter userTransactionRequest was null or undefined when calling createSigningMessage.');
        }


        // Path Params
        const localVarPath = '/transactions/signing_message';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userTransactionRequest, "UserTransactionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * There are two type transaction identifiers:    1. Tranasction hash: included in any transaction JSON respond from server.   2. Transaction version: included in on-chain transaction JSON respond from server.   When given transaction hash, server first looks up on-chain transaction by hash; if no on-chain transaction found, then look up transaction by hash in the mempool (pending) transactions.  When given transaction version, server looks up the transaction on-chain by version.  To create transaction hash:   1. Create hash message bytes: \"DIEM::Transaction\" bytes + BCS bytes of [Transaction](https://diem.github.io/diem/diem_types/transaction/enum.Transaction.html).   2. Apply hash algorithm `SHA3-256` to the hash message bytes.   3. Hex-encode the hash bytes with `0x` prefix.
     * Get transaction
     * @param txnHashOrVersion * Transaction hash should be hex-encoded bytes string with &#x60;0x&#x60; prefix. * Transaction version is an &#x60;uint64&#x60; number.
     */
    public async getTransaction(txnHashOrVersion: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'txnHashOrVersion' is not null or undefined
        if (txnHashOrVersion === null || txnHashOrVersion === undefined) {
            throw new RequiredError('Required parameter txnHashOrVersion was null or undefined when calling getTransaction.');
        }


        // Path Params
        const localVarPath = '/transactions/{txn_hash_or_version}'
            .replace('{' + 'txn_hash_or_version' + '}', encodeURIComponent(String(txnHashOrVersion)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get transactions
     * @param start The start transaction version of the page.
     * @param limit The max number of transactions should be returned for the page.
     */
    public async getTransactions(start?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/transactions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * **Submit transaction using JSON without additional tools**    * Send [POST /transactions/signing_message](#operation/create-signing-message) to create transaction signing message.   * Sign the transaction signing message and create transaction signature.   * Submit the user transaction request with the transaction siganture. The request header \"Content-Type\" must set to \"application/json\".  **Submit transaction using signed transaction BCS bytes**    * Generate Diem core types and transaction script functions for the client application langauge     by [Tranaction Builder](https://github.com/diem/diem/tree/main/language/transaction-builder/generator)   * Create [RawTransaction](https://diem.github.io/diem/diem_types/transaction/struct.RawTransaction.html).   * Create transaction signing message: bytes(\"DIEM::RawTransaction\") + BCS bytes of the RawTransaction.     See [Crypto Spec](https://github.com/diem/diem/blob/main/specifications/crypto/README.md) for more details.   * Sign the transaction signing message and create transaction signature.   * Create [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html).   * Serialize [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html)     into BCS bytes.   * Submit the [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html)     BCS bytes (do not hex-encoded it). The request header \"Content-Type\" must set to \"application/vnd.bcs+signed_transaction\".
     * Submit transaction
     * @param submitTransactionRequest User transaction request with transaction sender&#39;s signature.
     */
    public async submitTransaction(submitTransactionRequest: SubmitTransactionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'submitTransactionRequest' is not null or undefined
        if (submitTransactionRequest === null || submitTransactionRequest === undefined) {
            throw new RequiredError('Required parameter submitTransactionRequest was null or undefined when calling submitTransaction.');
        }


        // Path Params
        const localVarPath = '/transactions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/vnd.bcs+signed_transaction"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(submitTransactionRequest, "SubmitTransactionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}

export class TransactionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSigningMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSigningMessage(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransaction(response: ResponseContext): Promise<Transaction > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Transaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Transaction", ""
            ) as Transaction;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Transaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Transaction", ""
            ) as Transaction;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransactions(response: ResponseContext): Promise<Array<OnChainTransaction> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OnChainTransaction> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OnChainTransaction>", ""
            ) as Array<OnChainTransaction>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<OnChainTransaction> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OnChainTransaction>", ""
            ) as Array<OnChainTransaction>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitTransaction(response: ResponseContext): Promise<PendingTransaction > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PendingTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PendingTransaction", ""
            ) as PendingTransaction;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PendingTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PendingTransaction", ""
            ) as PendingTransaction;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
