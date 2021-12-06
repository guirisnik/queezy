import React from 'react'
import { InputField, Set, Label, Button } from 'bumbag'
import { NewOptionContainer } from './quizFactory.style'

const NewQuestion = ({
  index,
  title,
  alternatives,
  handleChange,
  handleBlur,
  addAlternativeFactory,
  removeAlternativeFactory,
}) => (
  <>
    <InputField
      name={`questions[${index}].title`}
      label='Question title'
      placeholder='What do you want to ask?'
      size='medium'
      value={title}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <Set orientation='vertical' marginTop='20px' isFilled>
      <Label>Alternatives</Label>
      {alternatives.map((a, aIndex) => (
        <NewOptionContainer>
          <InputField
            name={`questions[${index}].alternatives[${aIndex}]`}
            placeholder='Describe the alternative'
            value={a}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button
            onClick={removeAlternativeFactory(index, aIndex)}
            palette='danger'
            variant='outlined'
          >
            -
          </Button>
        </NewOptionContainer>
      ))}
      <Button
        onClick={addAlternativeFactory(index)}
        palette='primary'
        variant='outlined'
      >
        +
      </Button>
    </Set>
  </>
)
export { NewQuestion }
