import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static countInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.countInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.countInstances;
  }
}