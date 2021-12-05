import React from 'react'
import { arrayOf, objectOf, string, any, func } from 'prop-types'
import { Heading, RadioGroupField } from 'bumbag'

const propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  alternatives: arrayOf(
    objectOf({ label: string.isRequired, value: string.isRequired })
  ),
  value: any.isRequired,
  handleBlur: func.isRequired,
  handleChange: func.isRequired,
}

const Question = ({
  name,
  title,
  alternatives,
  handleChange,
  handleBlur,
  value,
}) => (
  <>
    <Heading use='h4'>{title}</Heading>
    <RadioGroupField
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      options={alternatives}
    />
  </>
)

Question.propTypes = propTypes

export { Question }
