# .TransactionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSigningMessage**](TransactionsApi.md#createSigningMessage) | **POST** /transactions/signing_message | Create transaction signing message
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /transactions/{txn_hash_or_version} | Get transaction
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /transactions | Get transactions
[**submitTransaction**](TransactionsApi.md#submitTransaction) | **POST** /transactions | Submit transaction


# **createSigningMessage**
> InlineResponse200 createSigningMessage(userTransactionRequest)

This API creates transaction signing message for client to create transaction signature.  The success response contains hex-encoded signing message bytes.  **To sign the message**    1. Client first needs to HEX decode the `message` into bytes.   2. Then sign the bytes to create signature.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiCreateSigningMessageRequest = {
  // UserTransactionRequest | User transaction request
  userTransactionRequest: {
    sender: "0xdd",
    sequenceNumber: "0",
    maxGasAmount: "0",
    gasUnitPrice: "0",
    gasCurrencyCode: "XDX",
    expirationTimestampSecs: "1635447454",
    payload: {
    type: "script_function_payload",
    _function: "0x1::PaymentScripts::peer_to_peer_with_metadata",
    typeArguments: ["0x1::XDX::XDX"],
    arguments: ["0x1668f6be25668c1a17cd8caf6b8d2f25","2021000000","0x","0x"],
  },
  },
};

apiInstance.createSigningMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userTransactionRequest** | **UserTransactionRequest**| User transaction request |


### Return type

**InlineResponse200**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns hex-encoded transaction signing message bytes. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransaction**
> Transaction getTransaction()

There are two type transaction identifiers:    1. Tranasction hash: included in any transaction JSON respond from server.   2. Transaction version: included in on-chain transaction JSON respond from server.   When given transaction hash, server first looks up on-chain transaction by hash; if no on-chain transaction found, then look up transaction by hash in the mempool (pending) transactions.  When given transaction version, server looks up the transaction on-chain by version.  To create transaction hash:   1. Create hash message bytes: \"DIEM::Transaction\" bytes + BCS bytes of [Transaction](https://diem.github.io/diem/diem_types/transaction/enum.Transaction.html).   2. Apply hash algorithm `SHA3-256` to the hash message bytes.   3. Hex-encode the hash bytes with `0x` prefix.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiGetTransactionRequest = {
  // string | * Transaction hash should be hex-encoded bytes string with `0x` prefix. * Transaction version is an `uint64` number.
  txnHashOrVersion: "txn_hash_or_version_example",
};

apiInstance.getTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txnHashOrVersion** | [**string**] | * Transaction hash should be hex-encoded bytes string with &#x60;0x&#x60; prefix. * Transaction version is an &#x60;uint64&#x60; number. | defaults to undefined


### Return type

**Transaction**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a pending / on-chain transaction. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransactions**
> Array<OnChainTransaction> getTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiGetTransactionsRequest = {
  // number | The start transaction version of the page. (optional)
  start: 1,
  // number | The max number of transactions should be returned for the page. (optional)
  limit: 25,
};

apiInstance.getTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | The start transaction version of the page. | (optional) defaults to undefined
 **limit** | [**number**] | The max number of transactions should be returned for the page. | (optional) defaults to undefined


### Return type

**Array<OnChainTransaction>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns on-chain transactions, paginated. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **submitTransaction**
> PendingTransaction submitTransaction(submitTransactionRequest)

**Submit transaction using JSON without additional tools**    * Send [POST /transactions/signing_message](#operation/create-signing-message) to create transaction signing message.   * Sign the transaction signing message and create transaction signature.   * Submit the user transaction request with the transaction siganture. The request header \"Content-Type\" must set to \"application/json\".  **Submit transaction using signed transaction BCS bytes**    * Generate Diem core types and transaction script functions for the client application langauge     by [Tranaction Builder](https://github.com/diem/diem/tree/main/language/transaction-builder/generator)   * Create [RawTransaction](https://diem.github.io/diem/diem_types/transaction/struct.RawTransaction.html).   * Create transaction signing message: bytes(\"DIEM::RawTransaction\") + BCS bytes of the RawTransaction.     See [Crypto Spec](https://github.com/diem/diem/blob/main/specifications/crypto/README.md) for more details.   * Sign the transaction signing message and create transaction signature.   * Create [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html).   * Serialize [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html)     into BCS bytes.   * Submit the [SignedTransaction](https://diem.github.io/diem/diem_types/transaction/struct.SignedTransaction.html)     BCS bytes (do not hex-encoded it). The request header \"Content-Type\" must set to \"application/vnd.bcs+signed_transaction\".

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiSubmitTransactionRequest = {
  // SubmitTransactionRequest | User transaction request with transaction sender's signature.
  submitTransactionRequest: ,
};

apiInstance.submitTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitTransactionRequest** | **SubmitTransactionRequest**| User transaction request with transaction sender&#39;s signature. |


### Return type

**PendingTransaction**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.bcs+signed_transaction
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Transaction is accepted and submitted to mempool. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


