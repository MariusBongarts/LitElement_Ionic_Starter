import { UserService } from './services/user.service';

import { EN_STRINGS } from './resources/lang/en_strings';
import { DE_STRINGS } from './resources/lang/de_strings';
/*
Created by Marius Bongarts on 24.03.2019.
This class sets settings for the app.
*/

let userService = new UserService();

export const settings = {
    language: userService.getLoggedUser().preferredLanguage === 'german' ? DE_STRINGS : EN_STRINGS
}