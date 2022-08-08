import React from "react";
import { useLocation } from "react-router-dom";
import testResults from "../testResults.json";
import Graph from "./Graph";

const Person = (props) => {
  const location = useLocation(); // Using for getting the data from LINK
  const { personName } = location.state;

  let warmthSum = 0;
  let reasoningSum = 0;
  let emotionalStabilitySum = 0;
  let dominanceSum = 0;
  let livelinessSum = 0;
  let ruleConciousnessSum = 0;
  let socialBoldnessSum = 0;
  let sensitivitySum = 0;
  let vigilanceSum = 0;
  let abstractednessSum = 0;
  let privatenessSum = 0;
  let apprehensionSum = 0;
  let opennessToChangeSum = 0;
  let selfRelianceSum = 0;
  let perfectionismSum = 0;
  let tensionSum = 0;

  for (let index = 0; index < testResults.length; index++) {
    warmthSum = warmthSum + testResults[index].WarmthSum;
    reasoningSum = reasoningSum + testResults[index].ReasoningSum;
    emotionalStabilitySum =
      emotionalStabilitySum + testResults[index].EmotionalStability;
    dominanceSum = dominanceSum + testResults[index].Dominance;
    livelinessSum = livelinessSum + testResults[index].Liveliness;
    ruleConciousnessSum =
      ruleConciousnessSum + testResults[index].RuleConciousness;
    socialBoldnessSum = socialBoldnessSum + testResults[index].SocialBoldness;
    sensitivitySum = sensitivitySum + testResults[index].Sensitivity;
    vigilanceSum = vigilanceSum + testResults[index].Vigilance;
    abstractednessSum = abstractednessSum + testResults[index].Abstractedness;
    privatenessSum = privatenessSum + testResults[index].Privateness;
    apprehensionSum = apprehensionSum + testResults[index].Apprehension;
    opennessToChangeSum =
      opennessToChangeSum + testResults[index].OpennessToChange;
    selfRelianceSum = selfRelianceSum + testResults[index].SelfReliance;
    perfectionismSum = perfectionismSum + testResults[index].Perfectionism;
    tensionSum = tensionSum + testResults[index].Tension;
  }

  let avgVal = [
    null,
    warmthSum,
    reasoningSum,
    emotionalStabilitySum,
    dominanceSum,
    livelinessSum,
    ruleConciousnessSum,
    socialBoldnessSum,
    sensitivitySum,
    vigilanceSum,
    abstractednessSum,
    privatenessSum,
    apprehensionSum,
    opennessToChangeSum,
    selfRelianceSum,
    perfectionismSum,
    tensionSum,
  ];

  const personIndex = testResults.findIndex((obj) => obj.Name === personName); // This will return index of person

  const keys = Object.keys(testResults[personIndex]); // Array of key values
  const params = Object.values(testResults[personIndex]); // Array of parameters
  const idealParams = Object.values(testResults[0]); // Array of Ideal parameters

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold mb-10 text-center">
          Results for {personName}
        </h1>
        <div className="flex flex-wrap space-x-10 text-center space-y-10 pt-5 justify-center items-center">
          {keys.map((value, index) => {
            // let val = eval(value);
            // console.log(testResults[personIndex].eval(value));
            if (index === 0) {
              return null;
            }
            return (
              <Graph
                key={index}
                data={params[index]}
                idealData={idealParams[index]}
                average = {avgVal[index]/testResults.length}
                // parameter = {value}
                heading={value.toString()}
              ></Graph>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Person;
