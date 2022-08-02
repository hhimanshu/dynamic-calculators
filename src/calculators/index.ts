import { BainPlanForwardDietCalculator } from "./Bain/PlantForwardDiet";
import { MetaHomeCommuteCalculator } from "./Meta/HomeCommute";

export interface Calculator {
  getConfigurations: () => Map<String, number>;
  calculateActionValue: (action: string) => number;
  calculateBaselineValue: (choices: string[]) => number;
}

/**
 * This mapping will evolve as new organizations are added
 * and when new corresponding objectives are added
 * @param organizationName
 */
export const getCalculator = (
  organizationName: string,
  pledgeName: string
): Calculator | undefined => {
  switch (organizationName) {
    case "Bain":
      if (pledgeName === "PlantForwardDiet") {
        return new BainPlanForwardDietCalculator();
      }
      break;
    case "Meta":
      if (pledgeName === "HomeCommute") {
        return new MetaHomeCommuteCalculator();
      }
  }
  return undefined;
};
