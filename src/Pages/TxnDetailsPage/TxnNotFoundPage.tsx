// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0
import MainWrapper from '../../MainWrapper';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Nav } from 'react-bootstrap';


export const txnNotFoundPageText = 'Transaction not found.'
export default function TxnNotFoundPage() {
  return (<div>
    <MainWrapper>
      <Card className="text-center">

        <Card.Body>
          <Card.Title className="errorMsgClr">{txnNotFoundPageText}</Card.Title>
          <Card.Text> </Card.Text>
          <Nav.Link href='/'  ><Button variant="primary" className="themeBgClr">Go to  Home</Button> </Nav.Link>
          {/* */}
        </Card.Body>

      </Card>
    </MainWrapper>
  </div>
  )
}
