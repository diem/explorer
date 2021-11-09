# .AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountModules**](AccountsApi.md#getAccountModules) | **GET** /accounts/{address}/modules | Get account modules
[**getAccountModulesByVersion**](AccountsApi.md#getAccountModulesByVersion) | **GET** /ledger/{ledger_version}/accounts/{address}/modules | Get account modules by ledger version
[**getAccountResources**](AccountsApi.md#getAccountResources) | **GET** /accounts/{address}/resources | Get account resources
[**getAccountResourcesByVersion**](AccountsApi.md#getAccountResourcesByVersion) | **GET** /ledger/{ledger_version}/accounts/{address}/resources | Get account resources by ledger version


# **getAccountModules**
> Array<MoveModuleBytecode> getAccountModules()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiGetAccountModulesRequest = {
  // string
  address: "0xdd",
};

apiInstance.getAccountModules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | [**string**] |  | defaults to undefined


### Return type

**Array<MoveModuleBytecode>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the latest account modules. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountModulesByVersion**
> Array<MoveModuleBytecode> getAccountModulesByVersion()

This API returns account modules for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiGetAccountModulesByVersionRequest = {
  // string
  ledgerVersion: "52635485",
  // string
  address: "0xdd",
};

apiInstance.getAccountModulesByVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerVersion** | [**string**] |  | defaults to undefined
 **address** | [**string**] |  | defaults to undefined


### Return type

**Array<MoveModuleBytecode>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the given ledger version account modules. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountResources**
> Array<MoveResource> getAccountResources()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiGetAccountResourcesRequest = {
  // string
  address: "0xdd",
};

apiInstance.getAccountResources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | [**string**] |  | defaults to undefined


### Return type

**Array<MoveResource>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the latest account resources. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountResourcesByVersion**
> Array<MoveResource> getAccountResourcesByVersion()

This API returns account resources for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiGetAccountResourcesByVersionRequest = {
  // string
  ledgerVersion: "52635485",
  // string
  address: "0xdd",
};

apiInstance.getAccountResourcesByVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerVersion** | [**string**] |  | defaults to undefined
 **address** | [**string**] |  | defaults to undefined


### Return type

**Array<MoveResource>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the given ledger version account resources. |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


