import { Player } from "../types/player";
import { TroopType } from "../types/troop";

export const getBattleFormData = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const getData = (player: string): Player => ({
    troops: formData
      .getAll(`${player}-troops`)
      .filter((v) => !!v) as TroopType[],
    tower1: {
      type: formData.get(`${player}-tower-1-type`) as TroopType,
      hp: formData.get(`${player}-tower-1-hp`) as string
    },
    tower2: {
      type: formData.get(`${player}-tower-2-type`) as TroopType,
      hp: formData.get(`${player}-tower-2-hp`) as string
    }
  });

  return {
    troops: {
      piedra: formData.get("troop-piedra") as string,
      papel: formData.get("troop-papel") as string,
      tijeras: formData.get("troop-tijeras") as string
    },
    player1: getData("player-1"),
    player2: getData("player-2")
  };
};
