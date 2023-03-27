import { LocalStartup } from "../../features/startups/types";
import { blueTheme, pinkTheme } from "../Buttons/my-theme";
import { Button } from "../Buttons/MyButton";

export type HandleEditClickType = (
  arg0: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  arg1: LocalStartup
) => void;

export type HandleDeleteClick = (arg0?: string) => void;

const ReadOnlyRow = ({
  startup,
  handleEditClick,
  handleDeleteClick,
}: {
  startup: LocalStartup;
  handleEditClick: HandleEditClickType;
  handleDeleteClick: HandleDeleteClick;
}) => {
  return (
    <tr>
      <td>{startup.id}</td>
      <td>{startup.title}</td>
      <td>{startup.description}</td>
      <td>{startup.targetBudget}</td>
      <td>{startup.domain}</td>
      <td>{startup.currentStatus}</td>
      <td>
        <Button
          theme={blueTheme}
          type="button"
          onClick={(event) => handleEditClick(event, startup)}
        >
          Edit
        </Button>
        <Button
          theme={pinkTheme}
          type="button"
          onClick={() => handleDeleteClick(startup.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
