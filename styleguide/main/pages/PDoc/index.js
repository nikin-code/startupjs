import React from 'react'
import { observer } from 'startupjs'
import docs from '@startupjs/ui/docs'
import { Span, Br } from '@startupjs/ui'
import { useDocName } from 'clientHelpers'
import { ScrollView } from 'react-native'
import './index.styl'

export default observer(function PDoc ({
  style
}) {
  const [docName] = useDocName()
  const Component = docs[docName]
  if (!Component) return pug`Span 404. Not found`

  return pug`
    ScrollView.root
      Br
      Component
      Br(lines=4)
  `
})