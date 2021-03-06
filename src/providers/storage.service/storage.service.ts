import { LocalUser } from "../../domain/local_user";
import { STORAGE_KEYS } from "../../config/storage_keys.config";
import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
          return null;
        } else {
          return JSON.parse(usr);
        }
      }
    
      setLocalUser(obj: LocalUser) {
        if (obj == null) {
          localStorage.removeItem(STORAGE_KEYS.localUser);      
        } else {
          localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
      }


      setLocalUser2(result){
        //localStorage.setItem('246182', result);
        localStorage.setItem(result.id, JSON.stringify(result));
      }

}