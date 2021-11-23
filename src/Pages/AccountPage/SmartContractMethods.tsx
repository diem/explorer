import React from 'react'
import { Card } from 'react-bootstrap'
import './SmartContractMethods.css'
import { ExposedFunction, Module } from '../../api_clients/BlockchainRestTypes'

function mapModuleIntoMethodSignatures(module: Module) {
  // The ? operator is used below to ensure the page doesn't crash if unexpected data is retrieved.
  // Maybe in the future we will prefer it to crash.
  return module.abi?.exposed_functions.map((fn: ExposedFunction, idx: number) => {
    const params = fn.params.map((param: string, idx: number) => `arg${idx + 1}: ${param}`)

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

export default function SmartContractMethods({ modules }: { modules: Module[] }) {
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
