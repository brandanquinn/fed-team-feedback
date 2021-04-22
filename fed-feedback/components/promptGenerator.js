import prompts from '../config/prompts.json'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import styles from '../styles/Reviews.module.css';

export default function PromptGenerator() {

  let promptsArray = JSON.parse(JSON.stringify(prompts));
  let promptsHtml = promptsArray.map((prompt, index) => generatePrompt(prompt, index));

  return (
    <div>{promptsHtml}</div>
  )
}

function generatePrompt(prompt, index) {
  if (prompt.promptType === 'multipleChoice') {
    return (
    <div>
      <p key={index}>{prompt.question}</p>
      
      <InputGroup>
        <ul className={styles.multipleChoice}>
        {prompt.options.map((option, index) => 
          <li key={index}>
            <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Radio button for following text input" />
            <InputGroup.Text>{option}</InputGroup.Text>
          </InputGroup.Prepend>
          </li>)}
        </ul>
      </InputGroup>
    </div>
    )
  } else if (prompt.promptType === 'shortAnswer') {
    return (
      <div>
        <p key={index}>{prompt.question}</p>
        <InputGroup>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
      </div>
    )
  } else {
    return (
      <div>
        <p key={index}>{prompt.question}</p>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Checkbox />
            <InputGroup.Text>True</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="More info" />
          <InputGroup.Prepend>
            <InputGroup.Checkbox />
            <InputGroup.Text>False</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="More info" />
        </InputGroup>
      </div>
    )
  }
  
}

