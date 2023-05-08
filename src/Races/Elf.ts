import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.countInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.countInstances;
  }
} 
