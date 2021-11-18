import React from 'react'
import { BlockchainAccountModule } from '../../api_clients/BlockchainRestClient'
import { Card } from 'react-bootstrap'
import './SmartContractMethods.css'

function mapModuleIntoMethodSignatures(module: BlockchainAccountModule): string[] {
  return module?.abi?.exposed_functions.map((fn: any, idx: number) => {
    const params = fn.params.map((param: any, idx: number) => `arg${idx + 1}: ${param}`)
    function formatReturnTypes(returnTypes: string[]): string {
      if (returnTypes.length === 0) {
        return '()'
      } else if (returnTypes.length === 1) {
        return returnTypes[0]
      } else {
        return `(${returnTypes.join(', ')})`
      }
    }
    return (<li key={`method-${idx}`}>
      <pre className='mb-0 method-signature'>
        {`fun ${(fn.name)}(${params.join(', ')}): ${formatReturnTypes(fn.return)}`}
      </pre>
    </li>)
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
      <Card.Body id='smart-contract-methods'>
        <ul className='method-list'>
          {methodSignatures}
        </ul>
      </Card.Body>
    </Card>
  </>)
}
