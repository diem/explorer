import { DataOrErrors } from '../FetchType'
import { postQueryToAnalyticsApi } from '../AnalyticsClient'
import { MintEvent } from '../api_models/MintEvent'

function processMintEventsOrErrors(response: DataOrErrors<MintEvent[]>) {
  if (response.errors) {
    return response
  } else if (response.data) {
    return {
      errors: null,
      // @ts-ignore property accessor syntax breaks the code here
      data: response.data['receivedmint_events']
    }
  } else {
    return {
      errors: null,
      data: null
    }
  }
}

export async function getMintEvents() : Promise<DataOrErrors<MintEvent[]>> {
  // eslint-disable-next-line camelcase
  return postQueryToAnalyticsApi<{ receivedmint_events: MintEvent[] }>(
    'query getMintEvents {\n' +
      '  receivedmint_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
      '    amount\n' +
      '    currency\n' +
      '    key\n' +
      '    receiver\n' +
      '    sequence_number\n' +
      '    transaction_version\n' +
      '  }\n' +
      '}')
  // @ts-ignore It _is_ an array tho
    .then(processMintEventsOrErrors)
}
