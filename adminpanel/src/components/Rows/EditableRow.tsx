import { Startup } from "../../features/startups/types";
import { blueTheme } from "../Buttons/my-theme";
import { Button } from "../Buttons/MyButton";

const EditableRow = ({
  editStartupData,
  handleEditStartupChange,
  handleCancelClick,
}: {
  editStartupData?: Partial<Startup>;
  handleEditStartupChange: React.ChangeEventHandler<HTMLInputElement>;
  handleCancelClick: () => void;
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="id"
          required
          placeholder="id..."
          value={editStartupData?.id}
          onChange={handleEditStartupChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          required
          placeholder="title..."
          value={editStartupData?.title}
          onChange={handleEditStartupChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="description"
          required
          placeholder="description..."
          value={editStartupData?.description}
          onChange={handleEditStartupChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="targetBudget"
          required
          placeholder="target budget..."
          value={editStartupData?.targetBudget}
          onChange={handleEditStartupChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="domain"
          required
          placeholder="domain..."
          value={editStartupData?.domain}
          onChange={handleEditStartupChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="currentStatus"
          required
          placeholder="current status..."
          value={editStartupData?.currentStatus}
          onChange={handleEditStartupChange}
        />
      </td>
      <td>
        <Button theme={blueTheme} type="submit">
          Save
        </Button>
        <Button theme={blueTheme} type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
