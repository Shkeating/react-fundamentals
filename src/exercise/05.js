// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallStyles = {backgroundColor: 'lightblue'}
const medStyles = {backgroundColor: 'pink'}
const lgStyles = {backgroundColor: 'orange'}

function Box({styles, size, children}) {
  const sizeClass = size ? `box--${size}` : ''
  return (
    <div style={styles} className={`box ${sizeClass}`}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box styles={smallStyles} size="small">
        small lightblue box
      </Box>
      <Box styles={medStyles} size="medium">
        medium pink box
      </Box>
      <Box styles={lgStyles} size="large">
        large orange box
      </Box>
    </div>
  )
}

export default App
