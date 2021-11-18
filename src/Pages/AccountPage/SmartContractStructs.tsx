import React from 'react'
import { BlockchainAccountModule } from '../../api_clients/BlockchainRestClient'
import { Card } from 'react-bootstrap'

function mapModuleIntoStructs(module: BlockchainAccountModule): string[] {
  return module?.abi?.structs.map((struct: any) => {
    const structFields = struct.fields.map((field: any) => {
      return `\t${field.name}: ${field.type}`
    })
    return `struct ${struct.name} {\n${structFields.join('\n')}\n}\n`
  })
}

export default function SmartContractStructs({ modules }: { modules: BlockchainAccountModule[] }) {
  const structs = modules.flatMap(mapModuleIntoStructs)
  if (structs.length === 0) {
    return null
  }
  return (<>
    <Card className='mb-5'>
      <Card.Header>Smart Contract Structs</Card.Header>
      <Card.Body id='smart-contract-structs'>
        <pre>
          {structs}
        </pre>
      </Card.Body>
    </Card>
  </>)
}
