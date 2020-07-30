import IAttack  from './attack';
import IResistance  from './resistance';
import IWeakness   from './weakness';

export default interface ICard {
   id: string,
   name: string,
   nationalPokedexNumber: number,
   imageUrl: string,
   imageUrlHiRes: string,
   types: string[],
   supertype: string,
   subtype: string,
   hp: number,
   retreatCost: string[],
   convertedRetreatCost:1,
   number:number,
   artist: string,
   rarity: string,
   series: string,
   set: string,
   setCode:string,
   attacks: IAttack[],
   resistances: IResistance[],
   weaknesses: IWeakness[]
}