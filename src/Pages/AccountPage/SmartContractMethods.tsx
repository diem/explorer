import React from 'react'
import { BlockchainAccountModule } from '../../api_clients/BlockchainRestClient'
import { Card } from 'react-bootstrap'

function mapModuleIntoMethodSignatures(module: BlockchainAccountModule): string[] {
  return module?.abi?.exposed_functions.map((fn: any, idx: number) => {
    const params = fn.params.map((param: any, idx: number) => `arg${idx + 1}: ${param}`)
    return (<li key={`method-${idx}`}>{`fun ${(fn.name)}(${params.join(', ')}): (${fn.return.join(', ')})`}</li>)
  })
}

export default function SmartContractMethods({ modules }: { modules: BlockchainAccountModule[] }) {
  const methodSignatures = modules.flatMap(mapModuleIntoMethodSignatures)
  if (methodSignatures.length === 0) {
    return null
  }
  return (<>
    <Card className='mb-5'>
      <Card.Header>Smart Contract Methods</Card.Header>
      <Card.Body id='smart-contract-methods' style={{ fontStyle: 'italic' }}>
        <ul>
          {methodSignatures}
        </ul>
      </Card.Body>
    </Card>
  </>)
}
