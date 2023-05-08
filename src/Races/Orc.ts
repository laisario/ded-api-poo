import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.countInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.countInstances;
  }
} 
