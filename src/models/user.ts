import { Entity } from './entity';


/**
 * Created by MariusBongarts on 24.03.2019.
 */
export interface User extends Entity {
  name:string,
  preferredLanguage: Language;
}

type Language = 'german' | 'english';