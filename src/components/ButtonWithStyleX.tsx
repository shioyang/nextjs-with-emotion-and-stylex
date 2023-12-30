import stylex from "@stylexjs/stylex";

const buttonStyle = stylex.create({
  button: {
    backgroundColor: "red",
  },
});

const ButtonWithStyleX = () => {
    return <button className={stylex(buttonStyle.button)}>Hello StyleX</button>
}

export { ButtonWithStyleX }
