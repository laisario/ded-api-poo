import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints; 
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  receiveDamage(attackPoints: number): number {
    const demage = this._defense - attackPoints;
    this._defense -= demage;
    if (demage > 0) return this.lifePoints - demage;
    if (demage <= 0) return this.lifePoints - 1;
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
      return -1;
    }
    
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);

    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints += getRandomInt(1, 10);
    if (this._lifePoints > this._race.maxLifePoints) {
      this._lifePoints = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}