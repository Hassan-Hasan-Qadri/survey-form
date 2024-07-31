import { backURL } from "../constant";
function BackButton() {

  return (
        <a className="back-button" href={backURL}>
            Back
        </a>
  );
}

export default BackButton;
