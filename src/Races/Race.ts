abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor (_name: string, _dexterity: number) {
    Race.createdRacesInstaces();
    this._name = _name;
    this._dexterity = _dexterity;
  }

  get name(): string {
    return this._name
  }

  get dexterity(): number {
    return this._dexterity
  }

  static createdRacesInstaces(): number {
     throw new Error('Not implemented')
  }

  abstract get maxLifePoints(): number;
}

export default Race;