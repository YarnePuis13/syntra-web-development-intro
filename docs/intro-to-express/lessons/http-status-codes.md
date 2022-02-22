# HTTP Status Codes

## Successful Requests

The web services return a HTTP 2xx response code when the request was successful.

**HTTP Success Codes**:

| Success Code | Message | Description                            |
| ------------ | ------- | -------------------------------------- |
| 200          | OK      | The request was received successfully. |

### HTTP Error Codes

The full list of possible HTTP error codes can be found [here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). The table below provides additional details for commonly encountered error codes.

| Error Code | Message                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400        | Bad Request                      | This response is returned if any of these conditions is true:<br><br>_ The specified URI is invalid.<br>_ The request is not formatted correctly.<br>_ The request is missing a required field.<br>_ The number of requests received exceed the request limit.<br>_ The request encountered a database deadlock. In this case, the developer should resend the request a short time later.<br>_ This error can be received if Chunked Transfer-Encoding is enabled by the developer's web server. Concur does not support Chunked Transfer-Encoding.<br><br>**Attendee Web Service**:<br><br>_ The batch type parameter is not included on the URI of batch operations.<br>_ The request contains 0 attendees.<br>_ The request contains over 1000 attendees.<br><br>**Imaging Web Service**:<br><br>_ The barcode or reportId is missing.<br><br>**Purchase Order Web Service**:<br><br>_ The request contains 0 purchase orders.<br>_ The request contains over 1000 purchase orders.<br><br>**List Item Web Service**:<br><br>_ The request contains 0 list items.<br>_ The request contains over 1000 list items.<br><br>**Payment Batch File**:<br><br>_ The Batch ID specified in the URI is invalid.<br><br>**Trip Approval**:<br><br>_ The request contains 0 itineraries.<br><br>**User Web Service**:<br><br>_ The request contains 0 users.<br>_ The request contains over 1000 users. |
| 401        | Unauthorized                     | The Authorization header is not included in the request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 403        | Forbidden                        | This response is returned if any of these conditions is true:<br><br>_ The Authorization header is included but it fails validation. This can happen if the OAuth consumer does not have access to the Concur product required by the web service.<br>_ The partner application associated with the oauth_consumer_key has not been allowed access to the requested company.<br>\* The Oauth token has expired or been revoked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 404        | Not Found                        | **Extract Web Service**: The Definition ID or Job ID specified in the URI is invalid.<br><br>**Imaging Web Service**: No image was found for the specified report Id or barcode.<br><br>**Itinerary Web Service**: The Trip ID or Booking ID specified in the URI is invalid.<br><br>**Payment Batch Web Service**: The Batch ID specified in the URI is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 409        | Conflict                         | **Extract Web Service**: A job for the specified definition is already queued or running.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 429        | Too Many Requests                | This response is returned when services are overloaded either with too many requests from a single source or too many requests in aggregate. When this happens slow the rate of requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 500        | Internal Server Error/Not Closed | **Expense Report Web Service**: This response is returned when the system is unable to calculate an exchange rate for a posted expense report entry.<br>**Payment Batch Web Service**: The specified batch could not be closed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 503        | Service Unavailable              | This response is returned when the web service is down for maintenance. The partner application should sleep for 5 minutes then retry the request. If the request continues to fail after a few retries, the developer should contact concurconnecttech@concur.com.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |