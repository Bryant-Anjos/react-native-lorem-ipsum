import React from 'react'
import { Text } from 'react-native'
import { LoremIpsum } from 'lorem-ipsum'
import { IGeneratorOptions } from 'lorem-ipsum/types/src/lib/generator'

const mapper = {
  words: 'generateWords',
  sentences: 'generateSentences',
  paragraphs: 'generateParagraphs',
} as const

interface LoremIpsumProps {
  count?: number
  options?: IGeneratorOptions
  format?: string
  suffix?: string
  generate?: keyof typeof mapper
}

type LoremProps = React.ComponentProps<typeof Text> & LoremIpsumProps

const Lorem: React.FC<LoremProps> = (props: LoremProps) => {
  const { options, format, suffix, generate = 'words', count = 5, ...textProps } = props
  const lorem = new LoremIpsum(options, format, suffix)
  const text = lorem[mapper[generate]](count)

  return <Text {...textProps}>{text}</Text>
}

export default Lorem
