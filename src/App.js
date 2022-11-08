import "./App.css";

const colors = [
  { text: "primary", id: 1 },
  { text: "secondary", id: 2 },
  { text: "success", id: 3 },
  { text: "danger", id: 4 },
  { text: "warning", id: 5 },
  { text: "info", id: 6 },
  { text: "light", id: 7 },
  { text: "dark", id: 8 },
];

function Alert({ color }) {
  return (
    <div className={"alert " + color}>
      <p>This is a {color} alert—check it out!</p>
    </div>
  );
}

export default function Alerts() {
  const alertsList = colors.map((arrayElement) => (
    <Alert color={arrayElement.text}></Alert>
  ));
  return <div>{alertsList}</div>;
}
