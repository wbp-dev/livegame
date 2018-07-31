import { announcement } from './announcement';
import { estimationGame, estimationVoting, estimationWaiting, estimationEnded } from './estimation';
import { fullShowVoting, fullShowWaiting } from './fullShowVoting';

const interactionTypes = new Map();
const schemaKeys = [];

export function typeNames() {
  return [...interactionTypes.keys()].reduce(
    (obj, key) => ({
      ...obj,
      [key]: key,
    }),
    {},
  );
}

function addInteractionTypeToMap(interactionType) {
  const { typeName, schemaKey } = interactionType;

  if (interactionTypes.has(typeName)) {
    throw new Error(`InteractionType Map: There already is an interactionType called ${typeName}`);
  }
  if (schemaKey && schemaKeys.includes(schemaKey)) {
    throw new Error(`InteractionType Error: The schemaKey ${schemaKey} is already used`);
  }

  schemaKeys.push(schemaKey);
  interactionTypes.set(typeName, interactionType);
}

[
  announcement,
  estimationGame,
  estimationVoting,
  estimationWaiting,
  estimationEnded,
  fullShowVoting,
  fullShowWaiting,
].forEach((type) => addInteractionTypeToMap(type));

export default interactionTypes;