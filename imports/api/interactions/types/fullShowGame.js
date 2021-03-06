import InteractionType from './InteractionType';

export const fullShowGame = new InteractionType({
  typeName: 'FULL_SHOW_GAME',
  label: 'Show • Spiel',
  schemaKey: 'fullShowGame',
  submittable: true,
  fields: {
    gameNumber: {
      type: Number,
      label: 'Spielnummer',
      publish: true,
      index: 1,
    },
    pointsCandidate1: {
      type: Number,
      label: 'Punkte Kandidat 1',
      optional: true,
      defaultValue: 0,
    },
    pointsCandidate2: {
      type: Number,
      label: 'Punkte Kandidat 2',
      optional: true,
      defaultValue: 0,
    },
    winner: {
      type: String,
      label: 'Gewinner',
      optional: true,
      defaultValue: 'NONE',
      allowedValues: ['NONE', 'CANDIDATE1', 'CANDIDATE2'],
      publish: true,
    },
  },
});

export const fullShowWaiting = new InteractionType({
  typeName: 'FULL_SHOW_WAITING',
  label: 'Show • Warten',
});
