import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Filler from "../../components/FillerSignup/FillerSignup";
import InvestedProjectsTable from "../../components/InvestedProjectsTable/InvestedProjectsTable";
import StatisticsItem from "../../components/StatisticsItem/StatisticsItem";
import TotalInvestedChard from "../../components/TotalInvestedChart/TotalInvestedChard";
import BlueButton from "../../components/UIElements/BlueButton/BlueButton";
import Form from "../../components/UIElements/Form/Form";
import FormInput from "../../components/UIElements/FormInput/FormInput";
import Links from "../../components/UIElements/Links/Links";
import { selectUser, setUser, User } from "../../store/userReducer";
import "./InvestorDashboardPage.scss";

const InvestorDashboardPage: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");

    setUserInfo(user);
  }, []);

  const updateUserInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setUser(userInfo));
  };

  return (
    user && (
      <div className="investor-dashboard-page">
        <Filler hand={true} title={`Welcome,\n${user.name}`} />
        <div className="investor-dashboard-page__dashboard-wrapper">
          <div className="investor-dashboard">
            <div className="investor-dashboard-content">
              <Links
                links={[
                  { location: "personal", title: "Personal Information" },
                  { location: "investments", title: "My Investments" },
                  {
                    location: "nft",
                    title: "My NFT'S",
                    style: { pointerEvents: "none", color: "lightgray" },
                  }
                ]}
              />
              <Routes>
                <Route index element={<Navigate to={"personal"} replace />} />
                <Route
                  path="personal"
                  element={
                    userInfo && (
                      <Form img={false} onSubmit={updateUserInfo}>
                        <FormInput
                          onChange={(e) =>
                            setUserInfo(
                              (prev) =>
                                prev && { ...prev, name: e.target.value }
                            )
                          }
                          style={
                            user.name !== userInfo.name
                              ? { border: "1px orange solid" }
                              : undefined
                          }
                          name="Full Name"
                          value={userInfo.name}
                        />
                        <FormInput
                          type={"email"}
                          onChange={(e) =>
                            setUserInfo(
                              (prev) =>
                                prev && { ...prev, email: e.target.value }
                            )
                          }
                          style={
                            user.email !== userInfo.email
                              ? { border: "1px orange solid" }
                              : undefined
                          }
                          name="Email"
                          value={userInfo.email}
                        />
                        <FormInput
                          type={"tel"}
                          onChange={(e) =>
                            setUserInfo(
                              (prev) =>
                                prev && { ...prev, phoneNumber: e.target.value }
                            )
                          }
                          style={
                            user.phoneNumber !== userInfo.phoneNumber
                              ? { border: "1px orange solid" }
                              : undefined
                          }
                          name="Phone Number"
                          value={userInfo.phoneNumber}
                        />
                        <FormInput
                          onChange={(e) =>
                            setUserInfo(
                              (prev) =>
                                prev && { ...prev, region: e.target.value }
                            )
                          }
                          style={
                            user.region !== userInfo.region
                              ? { border: "1px orange solid" }
                              : undefined
                          }
                          name="Country/Region"
                          value={userInfo.region}
                        />
                        <FormInput
                          onChange={(e) =>
                            setUserInfo(
                              (prev) =>
                                prev && { ...prev, city: e.target.value }
                            )
                          }
                          style={
                            user.city !== userInfo.city
                              ? { border: "1px orange solid" }
                              : undefined
                          }
                          name="City"
                          value={userInfo.city}
                        />
                        <FormInput type={"password"} name="Password" />
                        <BlueButton name={"Update"} />
                      </Form>
                    )
                  }
                />
                <Route path="investments" element={<InvestedProjectsTable />} />
              </Routes>
            </div>
            <div className="investor-dashboard-statistics">
              <div className="investor-dashboard-statistics__title">
                Statistics
              </div>
              <div className="investor-dashboard-statistics__rows">
                <StatisticsItem text="Amount of available AIS coin" />
                <StatisticsItem text="Available votes count" />
                <StatisticsItem text="Profits from staking & referral program " />
                <StatisticsItem text="Total NFTs" />
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="investments"
            element={
              <div className="investor-dashboard-graph">
                <TotalInvestedChard />
              </div>
            }
          />
        </Routes>
      </div>
    )
  );
};

export default InvestorDashboardPage;
