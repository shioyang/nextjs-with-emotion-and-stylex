/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const buttonStyle = {
    button: css`
      color: blue;
    `
}

const ButtonWithEmotion = () => {
    return <button css={buttonStyle.button}>Hello Emotion</button>
}

export { ButtonWithEmotion }
