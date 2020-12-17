import { Player } from "./player";
import { Troop } from "./troop";

interface BattleResult {
  troops: Troop[];
  fallback?: Troop[];
  tower1: Troop;
  tower2: Troop;
}

interface BattleAction {
  troops: {
    piedra: string;
    papel: string;
    tijeras: string;
  };
  player1: Player;
  player2: Player;
  result: {
    player1: BattleResult;
    player2: BattleResult;
  };
}
