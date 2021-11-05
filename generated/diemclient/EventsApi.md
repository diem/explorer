# .EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountEvents**](EventsApi.md#getAccountEvents) | **GET** /accounts/{address}/events/{event_handle_struct}/{field_name} | Get events by event handle
[**getEvents**](EventsApi.md#getEvents) | **GET** /events/{event_key} | Get events by event key


# **getAccountEvents**
> Array<Event> getAccountEvents()

This API extracts event key from the account resource identified by the `event_handle_struct` and `field_name`, then returns events identified by the event key.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiGetAccountEventsRequest = {
  // string
  address: "0xdd",
  // string
  eventHandleStruct: "0x1::DiemAccount::DiemAccount",
  // string | The field name of the `EventHandle` in the struct.
  fieldName: "sent_events",
};

apiInstance.getAccountEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | [**string**] |  | defaults to undefined
 **eventHandleStruct** | [**string**] |  | defaults to undefined
 **fieldName** | [**string**] | The field name of the &#x60;EventHandle&#x60; in the struct. | defaults to undefined


### Return type

**Array<Event>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns events |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEvents**
> Array<Event> getEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiGetEventsRequest = {
  // string | Event key for an event stream. It is BCS serialized bytes of `guid` field in the Move struct `EventHandle`.
  eventKey: "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
};

apiInstance.getEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventKey** | [**string**] | Event key for an event stream. It is BCS serialized bytes of &#x60;guid&#x60; field in the Move struct &#x60;EventHandle&#x60;. | defaults to undefined


### Return type

**Array<Event>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns events |  -  |
**400** | Bad request due to a client error: invalid request headers, parameters or body. Client should not retry the request without modification. |  -  |
**404** | Resource or data not found. Client may retry the request if it is waiting for transaction execution or ledger synchronization. |  -  |
**500** | Server internal error, caused by unexpected issues. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


