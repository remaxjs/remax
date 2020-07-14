import * as React from 'react'
import { NodeProps } from '../core/Node'

export default function View(props: NodeProps) {
  return React.createElement('View', props)
}