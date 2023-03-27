import { Link } from "react-router-dom";
import BlueButton from "../UIElements/BlueButton/BlueButton";
import Form from "../UIElements/Form/Form";
import FormContainer from "../UIElements/FormContainer/FormContainer";
import FormInput from "../UIElements/FormInput/FormInput";
import "./Register.scss";

const Register: React.FC = () => {
  return (
    <div className="register-frame">
      <FormContainer>
        <Form
          img={true}
          formName="User registration"
          description={`Text describing the role "Registered User", available sections and user capabilities. Contains a test describing the role "Registered User", available sections and user capabilities. Contains a test describing the role "Registered User", available sections and user capabilities. Contains a test describing the role "Registered User", available sections and user capabilities. Contains a test describing the role "Registered User", available sections and user capabilities. Contains a test describing the role "Registered User", available sections and user capabilities. `}
        >
          <FormInput
            required
            name="Full name"
            type={"text"}
            placeholder="John Smith"
          />
          <FormInput
            required
            name="Email"
            type={"email"}
            placeholder="example@example.com"
          />
          <FormInput required name={"Password"} type={"password"} />
          <FormInput required name={"Confirm Password"} type={"password"} />
          <label>
            <input type={"checkbox"}></input>I have read and agree to
            SeedInvest's Terms of Use and Privacy Policy. I furthermore
            acknowledge that Issuers that successfully raise on SeedInvest may
            pay affiliates of SeedInvest fees in the form of cash or securities.
            (Learn more on our FAQs.)
          </label>
          <label>
            <input type={"checkbox"}></input>I would like to receive
            communications such as new opportunities, company updates, and event
            invitations.
          </label>
          <BlueButton name="Sign Up" onClick={() => {}} />
        </Form>
      </FormContainer>
    </div>
  );
};

export default Register;
