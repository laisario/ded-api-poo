import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static countInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.countInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.countInstances;
  }
}