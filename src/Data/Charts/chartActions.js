import {
  getGameBoardSize,
  getGameTimeSettings,
  getGameHandicapState
} from "../utils";

export const UPDATE_CHART_DATA_SOURCE = "UPDATE_CHART_DATA_SOURCE";

export const rankedValues = {
  Ranked: "Ranked",
  Unranked: "Unranked",
  values: ["Ranked", "Unranked"]
}
export const tournamentValues = {
  Tournament: "Tournament",
  NonTournament: "Non-tournament",
  values: ["Tournament", "Non-tournament"]
}
export const boardSizeValues = {
  Nineteens: "19x19",
  Thirteens: "13x13",
  Nines: "9x9",
  Others: "Others",
  values: ["19x19", "13x13", "9x9", "Others"]
}
export const timeSettingsValues = {
  Blitz: "Blitz",
  Live: "Live",
  Correspondence: "Correspondence",
  values: ["Blitz", "Live", "Correspondence"]
}
export const colorValues = {
  Black: "Play as Black",
  White: "Play as White",
  values: ["Play as Black", "Play as White"]
}
export const handicapValues = {
  Even: "Even game",
  Taker: "Handicap taker",
  Giver: "Handicap giver",
  values: ["Even game", "Handicap taker", "Handicap giver"]
}

export const minDate = new Date(-8640000000000000);
export const maxDate = new Date();

const defaultActionParams = {
  startDate: minDate,
  endDate: maxDate,
  ranked: rankedValues.values,
  tournament: tournamentValues.values,
  boardSize: boardSizeValues.values,
  timeSettings: timeSettingsValues.values,
  handicap: handicapValues.values,
  color: colorValues.values
}

export const applyGameFilters = ({
  startDate = minDate,
  endDate = maxDate,
  ranked = rankedValues.values,
  tournament = tournamentValues.values,
  boardSize = boardSizeValues.values,
  timeSettings = timeSettingsValues.values,
  handicap = handicapValues.values,
  color = colorValues.values
} = defaultActionParams) => (dispatch, getState) => {

  const playerId = getState().player.id;

  const params = {
    startDate,
    endDate,
    ranked,
    tournament,
    boardSize,
    timeSettings,
    handicap,
    color,
    playerId
  };
  const filterFunction = composeFilterFunction(params);
  dispatch(
    updateChartDataSource({
      ...params,
      results: getState().games.results
        .filter(filterFunction)
    })
  )
}

const composeFilterFunction = ({
  startDate,
  endDate,
  ranked,
  tournament,
  boardSize,
  timeSettings,
  handicap,
  color,
  playerId
}) => (game, index) => {

  const date = new Date(game.ended);
  if (date < startDate || date > endDate) return false;

  return gameSatisfyRankedRule(game, ranked)
    && gameSatisfyTournamentRule(game, tournament)
    && gameSatisfyBoardSizeRule(game, boardSize)
    && gameSatisfyTimeSettingsRule(game, timeSettings)
    && gameSatisfyHandicapRule(game, handicap, playerId)
    && gameSatisfyColorRule(game, color, playerId);
}

const gameSatisfyRankedRule = (game, ranked) => {
  if (game.ranked && !ranked.includes(rankedValues.Ranked)) return false;
  if (!game.ranked && !ranked.includes(rankedValues.Unranked)) return false;
  return true;
}

const gameSatisfyTournamentRule = (game, tournament) => {
  const isTournamentGame = game.tournament !== null;
  if (isTournamentGame && !tournament.includes(tournamentValues.Tournament)) return false;
  if (!isTournamentGame && !tournament.includes(tournamentValues.NonTournament)) return false;
  return true;
}

const gameSatisfyBoardSizeRule = (game, boardSize) => {
  const gameSize = getGameBoardSize(game);
  return boardSize.includes(gameSize);
}

const gameSatisfyTimeSettingsRule = (game, timeSettings) => {
  const gameTimeSettings = getGameTimeSettings(game);
  return timeSettings.includes(gameTimeSettings);
}

const gameSatisfyHandicapRule = (game, handicap, playerId) => {
  const gameHandicapState = getGameHandicapState(game, playerId);
  return handicap.includes(gameHandicapState);
}

const gameSatisfyColorRule = (game, color, playerId) => {
  if (game.players.black.id === playerId && !color.includes(colorValues.Black)) return false;
  if (game.players.white.id === playerId && !color.includes(colorValues.White)) return false;
  return true;
}

const updateChartDataSource = (newData) => ({
  type: UPDATE_CHART_DATA_SOURCE,
  payload: newData
});