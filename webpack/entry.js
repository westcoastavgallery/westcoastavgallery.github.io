import React, { Component } from 'react'
import {render} from 'react-dom'
import Hello from './components/Hello'
import ShoppingCartButton from './components/ShoppingCartButton'
import {state, signal} from 'cerebral/tags'
import {Container, connect} from '@cerebral/react'
import { Controller } from 'cerebral'
import { set } from 'cerebral/operators'
import Devtools from 'cerebral/devtools'

const controller = Controller({
  state: {
    foo: 'bar'
  },
  signals: {
    clicked: [set(state`myName`, 'MOMO')]
  },
   devtools: process.env.NODE_ENV === 'production' ? null : Devtools({
    host: 'localhost:8887',
    reconnect: true,
    storeMutations: true,
    bigComponentsWarning: 5,
    warnStateProps: true,
    allowedTypes: [Blob]
  })
})

render((
  <Container controller={controller}>
    <Hello />
  </Container>
), document.getElementById('root1'))

render((
  <Container controller={controller}>
    <ShoppingCartButton />
  </Container>
), document.getElementById('buy-button'))
