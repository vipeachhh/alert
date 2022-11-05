import "./App.css";

const color = [
  { text: "primary", id: 1 },
  { text: "secondary", id: 2 },
  { text: "success", id: 3 },
  { text: "danger", id: 4 },
  { text: "warning", id: 5 },
  { text: "info", id: 6 },
  { text: "light", id: 7 },
  { text: "dark", id: 8 },
];
export default function Alert() {
  const divColor = color.map((color) => (
    <div className={color.text}>
      <p>This is a {color.text} alert—check it out!</p>
    </div>
  ));
  return <div>{divColor}</div>;
}
/*export default function Alert() {
  const notice = color.map((color) => (
    <div className={color.id}>
      <alert>This is a {color.text} alert—check it out!</alert>
    </div>
  ));
  return <alert>{notice}</alert>;
}*/

/*<div className = "item1">
    <alert>This is a primary alert—check it out!</alert>
</div> */
