import "./SignIn.scss";
import sidepic from "./signin-sidepic.svg";
import { Link, useNavigate } from "react-router-dom";
import BlueButton from "../UIElements/BlueButton/BlueButton";
import FormInput from "../UIElements/FormInput/FormInput";
import Form from "../UIElements/Form/Form";
import FormContainer from "../UIElements/FormContainer/FormContainer";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userReducer";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setUser({
        email: "admin@admin.com",
        name: "Example User",
        city: "Moscow",
        phoneNumber: "88005553535",
        region: "Moscow",
        investedStartups: []
      })
    );
    navigate(-1);
  };

  return (
    <div className="signin-frame">
      <FormContainer>
        <Form formName="Sign In" img={true} onSubmit={signIn}>
          <FormInput
            required
            name="Email"
            type={"email"}
            placeholder="example@example.com"
          />
          <FormInput required name={"Password"} type={"password"} />
          <BlueButton name="Sign In" onClick={() => {}} />
          <div className="signin-additional">
            <div>
              Are you new here?{" "}
              <span>
                <Link to="/register">Sign up</Link>
              </span>
            </div>
            {/* <Link to="">Forget Password?</Link> */}
          </div>
        </Form>
      </FormContainer>
    </div>
  );
};

export default SignIn;
