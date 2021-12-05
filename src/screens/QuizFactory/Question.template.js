import React from 'react'
import { InputField, Set, Label } from 'bumbag'
import { OptionContainer, OptionLabel } from './quizFactory.style'

const Question = ({ index, title, alternatives, handleChange, handleBlur }) => (
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
      <OptionContainer>
        <OptionLabel>A</OptionLabel>
        <InputField
          name={`questions[${index}].alternatives.a`}
          placeholder='Option A'
          value={alternatives.a}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>B</OptionLabel>
        <InputField
          name={`questions[${index}].alternatives.b`}
          placeholder='Option B'
          value={alternatives.b}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>C</OptionLabel>
        <InputField
          name={`questions[${index}].alternatives.c`}
          placeholder='Option C'
          value={alternatives.c}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>D</OptionLabel>
        <InputField
          name={`questions[${index}].alternatives.d`}
          placeholder='Option D'
          value={alternatives.d}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>E</OptionLabel>
        <InputField
          name={`questions[${index}].alternatives.e`}
          placeholder='Option E'
          value={alternatives.e}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </OptionContainer>
    </Set>
  </>
)
export { Question }
