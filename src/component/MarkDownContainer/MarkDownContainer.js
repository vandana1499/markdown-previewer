import React, { useState } from 'react';
import MarkDownEditor from '../MarkDownEditor/MarkDownEditor';
import MarkDownPreview from '../MarkDownPreview/MarkDownPreview';
import classes from './MarkDownContainer.module.css';

const MarkDownContainer = () =>{
  const initialText = `# Let me introduce you to the markdown guide
  ---------
  ## Meet Heading

  # Heading is saying hello with h1
  ## Heading is saying hello with h2
  ##### Heading is saying hello with h6
  -----------------
  ## Meet Emphasis

  *Emphasis will be italic*
  _Emphasis also be italic_

  **Emphasis will be bold**
  __Emphasis also be bold__
  And feel free to ~~crossing negativity out~~.

  _You **can** combine them_

  -------------------
  ## Meet Lists

  ### It is an Unordered list
  * Item eat🍕
  * Item sleep😪
  * Item code💻
  * Item repeat🌀

   And of course, you can write this way too
    - 💻 Code.
       - ☕Coffee.
          - 👻bug.
  ### It is Ordered list

  1. 🍕 Eat
  1. 😪 Sleep
  1. 💻 Code
     1. ☕Coffee
     1. 👻 Bug
  1. 🌀Repeat

  ------------
  ## Meet Images

  ![This is a sample  panda image saying hello.](https://cutt.ly/TQwsY5F "This is a sample  panda image saying hello.")
  --------
  ## Meet Links

  This is the test link [Test link](https://test.com/).

  -------------

  ## Meet Blockquotes

  > This is the blockquote.
  >> You can write here too.
  --------------

  ## Meet Tables

  | Col 1(left align)  |Col 2(right align) |Col 3 (center align)|
  | :-------------     |-------------:     |:---------------:|
  | Col 1 data         | Col 2 data        |col 3 data       |
  | Col 1 data         | Col 2 data        |col 3 data       |
  | Col 1 data         | Col 2 data        |col 3 data       |

  -------------
  ## Meet Blocks of code

  Heres some code, \`<div></div>
  \`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  ----
  ## Use badges
  [![Open in Github ](https://img.shields.io/badge/Open%20In-Github-blue?logo=web)](https://test.com)

`
  const [content , setContent] = useState(initialText);
  const contentHandler = (value) =>
  {
    setContent(value);
  }
  return (
    <div className={classes.markdown__container}>
      <div className={classes.markdown__header}>
      </div>
    <div className={classes.markdown__content}>
      <MarkDownEditor onContent = {contentHandler}  content = {content}/>
      <MarkDownPreview content = {content}/>
      </div>
  </div>);
}
export default MarkDownContainer;