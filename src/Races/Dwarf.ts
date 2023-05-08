import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.countInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.countInstances;
  }
} 
