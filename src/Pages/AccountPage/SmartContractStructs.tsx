import React from 'react'
import { Card } from 'react-bootstrap'
import { Module, Struct } from '../../api_clients/BlockchainRestTypes'

function mapModuleIntoStructs(module: Module): string[] {
  // The ? operator is used below to ensure the page doesn't crash if unexpected data is retrieved.
  // Maybe in the future we will prefer it to crash.
  return module.abi?.structs.map((struct: Struct) => {
    const structFields = struct.fields.map(({ name, type }) => {
      return `\t${name}: ${type}`
    })
    return `struct ${struct.name} {\n${structFields.join('\n')}\n}\n`
  })
}

export default function SmartContractStructs({ data }: { data: Module[] }) {
  const structs = data.flatMap(mapModuleIntoStructs)
  if (structs.length === 0) {
    return null
  }
  return (
    <>
      <Card className="mb-5">
        <Card.Header>Smart Contract Structs</Card.Header>
        <Card.Body id="smart-contract-structs">
          <pre>{structs}</pre>
        </Card.Body>
      </Card>
    </>
  )
}
