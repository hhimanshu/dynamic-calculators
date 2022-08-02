import { getCalculator } from "./calculators";

const printOrganizationPledgeDetails = (
  organizationName: string,
  obhectiveName: string
) => {
  const calculator = getCalculator(organizationName, obhectiveName);

  if (!calculator) {
    console.error(
      `No calculator found for organization "${organizationName}" and objective "${obhectiveName}"`
    );
    return;
  }

  const configurations = calculator.getConfigurations();
  for (let [key, value] of configurations) {
    console.log(key, value);
  }

  console.log(calculator.calculateBaselineValue(["someKey"]));
  console.log(calculator.calculateActionValue("someKey"));
};

printOrganizationPledgeDetails("Bain", "PlantForwardDiet");
printOrganizationPledgeDetails("Meta", "PlantForwardDiet");
printOrganizationPledgeDetails("Meta", "HomeCommute");
