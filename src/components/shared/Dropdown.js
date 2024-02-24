import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const DropdownMenuDot = ({ title, align, cn, element }) => {
  return (
    <DropdownButton
      key="1"
      id="dropdown-button-drop-start"
      drop={`${align ? "start" : "center"}`}
      variant="light"
      className={cn}
      title={element}
    >
      {title.map((item, i) => {
        return (
          <Dropdown.Item key={i} eventKey={i}>
            {item}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default DropdownMenuDot;
