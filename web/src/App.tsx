interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Ok" />
      <Button text="Enviar" />
    </div>
  )
}

export default App